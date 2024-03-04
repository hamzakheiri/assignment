import { Collection, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FormSubmition1 {
    
    // site section
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    siteName: string;

    @Column()
    siteCode: string;

    @Column()
    siteAddress: string;

    @Column()
    sitePatente: string;

    @Column()
    siteRcNumber: string;

    @Column()
    siteIceNumber: string;

    @Column()
    siteAtel: string;

    // manager section
    @Column()
    maFullName: string;

    @Column()
    maCineNumber: string;

    @Column()
    maAddress: string;

    @Column()
    maMobileNumber: string;

    @Column()
    maEmail: string;

    // operator section
    @Column()
    opCode: string;

    @Column()
    opFullName: string;

    @Column()
    opCineNumber: string;

    @Column()
    opAddress: string;

    @Column()
    opMobileNumber: string;

    @Column()
    opMachineSerialNumber: string;
}   