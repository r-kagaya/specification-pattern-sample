import Specification from './Specification';

class UserSpecification extends Specification {
    public isSatisfiedBy(param: { [key: string]: string; }): boolean {
        if (param['name'] == "" || param['email'] == "") {
            return false;
        }

        return param['email'].endsWith('@gmail.com');
    }
}
export default UserSpecification;
