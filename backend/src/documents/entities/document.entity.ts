import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Document {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    title: string;
  
    @Column()
    size: number;
    
    @Column({type: 'bytea'})
    binaryData: Buffer;
}