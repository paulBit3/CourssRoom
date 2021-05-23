from django.contrib import admin
from django.urls import path
from rest_framework import routers

from .apiviews import *
from .views import *


router = routers.DefaultRouter()
router.register('api/classroom/greeting', GreetingListViewSet)
router.register('api/classroom/course', CourseViewSet)


# urlpatterns  = router.urls


urlpatterns = [
    #...
    path('api/users/register/', CreateUserView.as_view(), name='create_user'),
    path('api/classroom/greeting/add', CreateGreeting.as_view()),
    path('api/classroom/course/new/<int:pk>', CreateCourse.as_view()),
] + router.urls


#http://localhost:8000/api/classroom/course/new/1 
