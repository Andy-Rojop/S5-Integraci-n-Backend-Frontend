const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./src/app.module');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors(); // permitir conexión con el frontend
    await app.listen(3000);
    console.log(" Backend corriendo en http://localhost:3000");
}
bootstrap();