

from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer

class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ContactView(APIView):
    def post(self, request):
        # Validate and process the request data
        name = request.data.get('name')
        email = request.data.get('email')
        message = request.data.get('message')

        if not name or not email or not message:
            return Response({'error': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)

        # Handle the data (e.g., save to a database or send an email)
        # For now, just returning success
        return Response({'status': 'Message received successfully'}, status=status.HTTP_200_OK)
