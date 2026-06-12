import os
import uuid
from sqlalchemy import create_engine, TypeDecorator, BINARY
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

load_dotenv()

engine = create_engine(
    f"mysql+pymysql://{os.getenv('DB_USER')}:{os.getenv('DB_PASS')}"
    f"@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}",
    connect_args={"ssl": {"ca": os.getenv("DB_CA")}}
)

class BINARY_UUID(TypeDecorator):
    """
    This is class which will safely convert between Python's uuid.UUID objects and MySQL's BINARY(16) format.
    It ensures that UUIDs are stored efficiently in the database while still being easy to work with
    """
    impl = BINARY(16)
    cache_ok = True

    def process_bind_param(self, value, dialect):
        # If string representation of UUID is passed, convert it to bytes. If it's already a UUID object, convert to bytes directly.
        if value is None:
            return value
        if isinstance(value, uuid.UUID):
            return value.bytes
        return uuid.UUID(value).bytes

    def process_result_value(self, value, dialect):
        # this is to convert the 16-byte binary data back into a UUID object when retrieving from the database
        if value is None:
            return value
        return uuid.UUID(bytes=value)
    
Base = declarative_base()
Session = sessionmaker(bind=engine)
