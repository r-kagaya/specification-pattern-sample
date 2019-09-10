
interface ISpecification {
    isSatisfiedBy(param: { [key: string]: string; }): boolean;
    and(other: ISpecification): ISpecification;
    or(other: ISpecification): ISpecification;
}

abstract class Specification implements ISpecification {
    public and(other: Specification): Specification {
      return new AndSpecification(this, other);
    }
    public or(other: Specification): Specification {
      return new OrSpecification(this, other);
    }

    public abstract isSatisfiedBy(param: { [key: string]: string; }): boolean;
}

class OrSpecification extends Specification {
    constructor(
      private readonly a: Specification,
      private readonly b: Specification,
    ) {
      super();
    }

    public isSatisfiedBy(param: { [key: string]: string; }): boolean {
      return this.a.isSatisfiedBy(param) || this.b.isSatisfiedBy(param);
    }
}

class AndSpecification extends Specification {
    constructor(
      private readonly a: Specification,
      private readonly b: Specification,
    ) {
      super();
    }

    public isSatisfiedBy(param: { [key: string]: string; }): boolean {
      return this.a.isSatisfiedBy(param) && this.b.isSatisfiedBy(param);
    }
}

export default Specification;
