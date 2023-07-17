from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, status
from .serializer import SerializerForm, SerializerReply
from .models import NewForm, Reply

class ViewForm(generics.ListAPIView):
    queryset = NewForm.objects.all()
    serializer_class = SerializerForm

class ViewFormID(generics.RetrieveAPIView):
    queryset = NewForm.objects.all()
    serializer_class = SerializerForm

class CreateForm(generics.CreateAPIView):

    queryset = NewForm.objects.all()
    serializer_class = SerializerForm


class UpdateForm(generics.UpdateAPIView, ViewFormID):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)


    queryset = NewForm.objects.all()
    serializer_class = SerializerForm

    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)
        return Response({"message": "Formulario actualizado correctamente."}, status=status.HTTP_200_OK)


class DeleteForm(generics.DestroyAPIView, ViewFormID):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    queryset = NewForm.objects.all()
    serializer_class = SerializerForm

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({"message": "Formulario eliminado correctamente."}, status=status.HTTP_204_NO_CONTENT)


#Clases Para la creacion y la vista de respuestas

class ViewReply(generics.ListAPIView):
    queryset = Reply.objects.all()
    serializer_class = SerializerReply


class CreateReply(generics.CreateAPIView):
    queryset = Reply.objects.all()
    serializer_class = SerializerReply


