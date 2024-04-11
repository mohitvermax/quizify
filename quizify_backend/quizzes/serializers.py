# serializers.py

from rest_framework import serializers
from .models import *

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = '__all__'

class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Quiz
        fields = '__all__'

class QuestionResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionResponse
        fields = '__all__'

        def validate(self, data):
            question = data['question']
            selected_option = data.get('option')
            integer_answer = data.get('integer_answer')
            
            if question.question_type == 'integer_type' and integer_answer is None:
                    raise serializers.ValidationError("Integer response is required for integer type question.")
            elif  question.question_type == 'single_correct' and selected_option is None:
                    raise serializers.ValidationError("Selected option is required for single correct type question")

            return data
