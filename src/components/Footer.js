import Image from "next/image";
import { useRouter } from 'next/router';
import { Contact } from "./Contact";

export function Footer() {
  const router = useRouter();

  return (
    <div id="Footer">
    <div className="Contact">
      <Contact />
    </div>
    <div className="Footer_Link">
      <a href="https://github.com/Benji-devw" target="_blank" rel="noreferrer">
        <Image 
          src={`${router.basePath}/media/Github_Orange.svg`} 
          alt={'git_img'} priority height={30} width={30}
        />
      </a>
    </div>
    <div className="Footer_Link">
      <a href="https://www.linkedin.com/in/benjamin-navarro-586713220/" target="_blank" rel="noreferrer">
        <Image 
          src={`${router.basePath}/media/in_Orange.svg`} 
          alt={'git_img'} priority height={30} width={30}
        />
      </a>
    </div>

  <div><span>2023</span></div>
</div>
  )
}
