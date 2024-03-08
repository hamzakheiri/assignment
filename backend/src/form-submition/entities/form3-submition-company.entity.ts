import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Form3ComSubmition {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    companyName: string;

    @Column()
    rc: string;

    @Column()
    address: string;

    @Column()
    ownerFullName: string;

    @Column()
    ownerCineNumber: string;

    @Column()
    mandatoryCineNumber: string;

    @Column()
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    rcAndVehiReg: boolean;
    
    @Column()
    rcScan: boolean;
    
    @Column()
    CineScan: boolean;
    
    @Column()
    vehiRegScan: boolean;
    
    @Column()
    comProcurator: boolean;
}