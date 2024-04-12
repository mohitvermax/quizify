# views.py

from rest_framework import viewsets, permissions, generics
from .models import Quiz, Question, Answer
from .serializers import QuizSerializer, QuestionSerializer, AnswerSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    # permission_classes = [permissions.IsAdminUser]

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    # permission_classes = [permissions.IsAdminUser]

class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    # permission_classes = [permissions.IsAdminUser]

class QuizCreation(generics.CreateAPIView):
    def post(self, request, *args, **kwargs):
        # auth_header = request.Meta.get('HTTP_AUTHORIZATION')
        # token = auth_header.split()[0]
        # payload = AccessToken(token).payload
        # user = User.objects.get(id=payload['user_id'])

        if not request.user.is_superuser:
            return Response( { 'Error' : 'Not Authorized'}, status=status.HTTP_401_UNAUTHORIZED)

        data = request.data
        name = data.get('name')
        qtopic = data.get('topic')
        questions = data.get('questions')

        quiz = Quiz.objects.create(
            title=name,
            topic=qtopic
        )
        for question in questions :
            question_model = Question.objects.create(
                quiz=quiz,
                
            )
