import { getProfile } from "@/sanity-utils";
const profile = await getProfile();
const profilePic = profile.picture;

export default function banner() {
  return (
    <div>
      {/* Header */}
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={profilePic} alt="d.ts" />
          </a>
          <h1>
            <strong>Hi, I&apos;m Miles</strong>
            <p>
              Embedded Software Engineer
              <br />  and sometimes a rocket scientist on the weekend
              <br />
            </p>
          </h1>
        </div>
      </header>
    </div>
  );
}
