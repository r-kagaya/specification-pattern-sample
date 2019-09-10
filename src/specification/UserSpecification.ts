import Specification from './Specification';

class UserSpecification extends Specification {
    public isSatisfiedBy(param: { [key: string]: string; }): boolean {
        return param['name'] !== "" && param['email'] !== ""
    }
}

export default UserSpecification;
