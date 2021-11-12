import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";
import { Specification } from "../../model/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE
    }

    create({ description, name }: ICreateSpecificationDTO): void {
        const specifcation = new Specification();

        Object.assign(specifcation, {
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specifcation);
    }

    list(): Specification[] {
        return this.specifications;
    }

    findByName(name: string): Specification {
        const category = this.specifications.find(category => category.name === name)
        return category
    }
}

export { SpecificationsRepository }