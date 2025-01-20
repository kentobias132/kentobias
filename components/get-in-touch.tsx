export default function GetInTouch() {
  return (
    <div>
      <h4 className="uppercase mb-2">Let's get in touch</h4>
      <a
        href="mailto:thobhi2@gmail.com"
        className="text-darkText tracking-tighter hover:text-blue-600 underline-offset-4 hover:underline font-semibold text-2xl sm:text-4xl"
      >
        Let's work together and bring your ideas to life.{" "}
        <span className="lg:break-before-auto"> thobhi2@gmail.com </span>
      </a>
      <div className="flex gap-5 text-lg uppercase mt-2.5">
        <a
          href="https://x.com/holuwerthobhi"
          className="hover:underline hover:text-darkText"
        >
          X
        </a>
        •
        <a
          href="https://www.linkedin.com/in/tobi-kehinde-2a11a7213/"
          className="hover:underline hover:text-darkText"
        >
          Linkedin
        </a>
        •
        <a
          href="https://github.com/kentobias132"
          className="hover:underline hover:text-darkText"
        >
          Github
        </a>
      </div>
    </div>
  );
}
