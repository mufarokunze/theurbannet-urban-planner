from database.db import engine, Base

from models.user import User
from models.customer import Customer
from models.service_provider import ServiceProvider
from models.provider_service import ProviderService
# from models.service_category import ServiceCategory
from models.plan import Plan
from models.plan_item import PlanItem

Base.metadata.create_all(engine)

print(Base.metadata.tables.keys())
print("Urban Planner tables created successfully")
