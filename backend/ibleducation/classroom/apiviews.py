from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.permissions import IsAuthenticated

from .models import *
from .serializers import *


class GreetingListViewSet(viewsets.ModelViewSet):
	"""docstring for greeting"""

	permission_classes = [IsAuthenticated,]
	permission_classes = (permissions.AllowAny,)


	#queryset = Greeting.objects.all().order_by('-date')

	#getting only one item and that is the latest item added
	queryset = Greeting.objects.order_by('-date')[0:1]
	serializer_class = GreetingSerializer


class CourseViewSet(viewsets.ModelViewSet):
	"""docstring for course """
	http_methods = ['get','update','post', 'delete']

	permission_classes = [IsAuthenticated,]
	permission_classes = (permissions.AllowAny,)

	#filter to display course and by order the lates one
	queryset = Course.objects.filter(show=True).order_by('-created')

	#display course by order the latest one
	#queryset = Course.objects.all().order_by('-created')

	#queryset = Greeting.objects.order_by('-date')
	serializer_class = CourseSerializer

