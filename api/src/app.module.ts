import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CatsModule } from './cats/cats.module'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'myApp',
            entities: ['dist/entities/**/*.entity.js'],
            migrations: ['dist/migrations/**/*.js'],
            synchronize: true
        }),
        CatsModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
