
interface ISpecification {
    isSatisfiedBy(param: { [key: string]: string; }): boolean;
    and(spec: ISpecification): ISpecification;
    or(spec: ISpecification): ISpecification;
}

abstract class Specification implements ISpecification {
    public and(spec: Specification): Specification {
      return new AndSpecification(this, spec);
    }
    public or(spec: Specification): Specification {
      return new OrSpecification(this, spec);
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
