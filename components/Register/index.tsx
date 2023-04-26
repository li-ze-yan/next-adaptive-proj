import RegisterCard from "../RegisterCard";
import Container from "../Container";
import Register1 from "@/public/images/register1.svg";
import Register2 from "@/public/images/register2.svg";
import RegisterHover1 from "@/public/images/registerHover1.svg";
import RegisterHover2 from "@/public/images/registerHover2.svg";
import classNames from "classnames";

interface IProps {
  flag?: boolean;
}

const Register = ({ flag }: IProps) => {
  return (
    <div
      className={classNames(
        "relative z-0 w-full text-white text-center",
        flag ? "bg-white lg:pt-10 pt-0 pb-6" : "bg-[#4e638d] py-36"
      )}
    >
      <Container>
        {!flag && (
          <>
            <p className="text-5xl font-bold tracking-[1px] mb-16">
              Register with us
            </p>
            <p className="text-base tracking-[1px] mb-10">
              If you are a content creator/journalist or influencer register
              with us now to get all the latest news from our clients!
            </p>
          </>
        )}
        <div className="w-full lg:flex lg:justify-around block">
          <RegisterCard
            title="Content Creator"
            description="If you are content creator and you like to get involved, please register here"
            image={Register1}
            imageHover={RegisterHover1}
          />
          <RegisterCard
            title="Media"
            description="If you are a journalist, editor, freelance and so on... this is for you. Register to get news and review copies from our clients"
            image={Register2}
            imageHover={RegisterHover2}
          />
        </div>
      </Container>
    </div>
  );
};

export default Register;
