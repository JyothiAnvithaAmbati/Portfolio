

from django.urls import path
from .views import ProjectList, ContactView

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('contact/', ContactView.as_view(), name='contact'),
]



