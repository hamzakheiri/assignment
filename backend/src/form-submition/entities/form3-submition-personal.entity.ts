import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Form3PerSubmition {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    lastName: string;

    @Column()
    firstName: string;

    @Column()
    cineNumber: string;

    @Column()
    ownerAddress: string;

    @Column()
    ownerCineValidationDate: string;

    @Column()
    ownerPhoneNumber: string;

    @Column()
    ownerEmail: string;


    @Column()
    cinAuth: boolean;
    
    @Column()
    vehiReg: boolean;
    
    @Column()
    cinScan: boolean;
    
    @Column()
    vehiRegiScan: boolean;


}
