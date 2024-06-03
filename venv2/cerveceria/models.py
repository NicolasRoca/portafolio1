from django.db import models

# Create your models here.
#MODELO ROLES DE USUARIO
class Rol(models.Model):
    cod_rol = models.IntegerField(primary_key=True, unique=True)
    rol = models.CharField(max_length=50)
    def __str__(self):
        return self.rol

#MODELO USUARIO
class Usuario(models.Model):
    correo = models.CharField(max_length=50, unique=True, primary_key=True)
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    telefono = models.IntegerField(blank=True, null=True)
    direccion = models.CharField(max_length=50,blank=True, null=True)
    password = models.CharField(max_length=50)
    cod_rol = models.ForeignKey(Rol, on_delete= models.CASCADE)
    def __str__(self):
        return self.correo

#MODELO PRODUCTO CERVEZAS
class Producto(models.Model):
    cod_producto = models.IntegerField(primary_key=True, unique=True)
    nombre_producto = models.CharField(max_length=50)
    descripcion_producto = models.CharField(max_length=50)
    precio_producto = models.IntegerField()
    stock_producto = models.IntegerField()
    grado_alcoholico = models.FloatField()
    litros = models.FloatField()
    def __str__(self):
        return self.nombre_producto
    
#MODELO DETALLE PEDIDO
class Detalle_Pedido(models.Model):
    cod_pedido = models.IntegerField(primary_key=True, unique=True)
    precio_unitario = models.IntegerField()
    cantidad = models.IntegerField()
    descuento = models.FloatField()
    cod_producto = models.ForeignKey(Producto, on_delete= models.CASCADE)

#MODELO PEDIDOS
class Pedido(models.Model):
    cod_pedido = models.IntegerField(primary_key=True, unique=True)
    correo = models.ForeignKey(Usuario, on_delete= models.CASCADE)
    fecha_pedido = models.DateField()