from django.db import models
from django.core.exceptions import ValidationError


class NewForm(models.Model):
    titulo = models.CharField(max_length=100)
    pregunta1 = models.CharField(max_length=100)
    pregunta2 = models.CharField(max_length=100)

    def __str__(self):
        return self.titulo


class Reply(models.Model):
    formulario = models.ForeignKey(NewForm, on_delete=models.CASCADE)
    respuesta_1 = models.CharField(max_length=100)
    respuesta_2 = models.CharField(max_length=100)

    def __str__(self):
        return self.formulario.titulo
