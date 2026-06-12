from database.db import engine, Base

from backend.models.user import User
from backend.models.customer import Customer
from backend.models.service_provider import ServiceProvider
from backend.models.provider_service import ProviderService
from backend.models.service_category import ServiceCategory
from backend.models.plan import Plan
from backend.models.plan_item import PlanItem

Base.metadata.create_all(engine)

print(Base.metadata.tables.keys())
print("Urban Planner tables created successfully")
