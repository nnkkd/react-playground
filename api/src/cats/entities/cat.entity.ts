import { Column, PrimaryGeneratedColumn } from 'typeorm'

export class Cat {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}
