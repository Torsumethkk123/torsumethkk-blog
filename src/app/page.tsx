import Link from "next/link";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { SiGmail, SiAdobephotoshop, SiCanva } from "react-icons/si";
import { RiHtml5Fill, RiCss3Fill, RiJavascriptFill, RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import Repos from "./(scripts)/_components/repos";
import { Suspense } from "react";
import LoadRing from "./(scripts)/_components/loadring";

export default async function Home() {
  return (
    <div className="py-8 min-h-[600px] h-auto">
      <div>
        <div className="relative">

          <h2 className="text-[30px]"><span>❄️ ยินดีต้อนรับผม Torsumethkk</span></h2>
          <div className="indent-[40px] mt-6">
            <p className="leading-[35px] text-[20px] font-light">
              สวัสดีครับผมชื่อ <span className="font-normal">ต่อ</span> เป็น Front-End Developer ในเว็บไซต์นี้จะรวบรวม ประวัติส่วนตัว, ผลงาน, บล็อกส่วนตัว <br /> 
              และเอกสารหรือ Document ซึ่งจะเก็บรวมรวม Tutorials เกี่ยวกับการเขียนโปรแกรมที่ผมเรียนรู้มาแบ่งปันกับทุกคน ในสไตล์ของผมเอง
            </p>
          </div>

        </div>

        <div className="mt-6"/>
        <h2 className="text-[30px]"><span>😎 เอาล่ะมารู้จักกันให้มากกว่านี้กันเถอะ !</span></h2>
        <div className="indent-[40px] mt-6">
          <p className="leading-[35px] text-[20px] font-light">
            ผมเป็นนักเรียนมัธยมตอนปลายปีที่ 6 แผนการเรียน วิทยาศาสตร์-คณิตศาสตร์-คอมพิวเตอร์ <br />
            โรงเรียนวัดนวลนรดิศ ผมมีความชอบในการเขียนโปรแกรมตั้งแต่อยู่มัธยมต้น ผมรู้สึกว่ามันสนุกที่สามารถสั่งให้
            คอมพิวเตอร์ทำงานตามงานที่เราสั่งได้ ผมมีประสบการณ์ในการเขียนโปรแกรมและพัฒนาเว็บไซต์ 3 ปี ตอนนี้เป็น <br />
            Front-End Devoloper และกำลังศึกษาด้าน Back-End พร้อมทั้ง Javascript DSA
          </p>
        </div>

        <div className="mt-6"/>
        <h2 className="text-[30px]"><span>🎨 ความสามารถและผลงาน</span></h2>
        <div className="flex space-x-4 p-6">
          <div className="w-[45%] min-h-[500px] h-auto p-4 rounded-lg info">
            <h2 className="text-[24px]"><span>ความสามารถ</span></h2>
            <div className="mt-4 ml-4">
              <p className="text-[20px] font-light">การเขียนโปรแกรม</p>
              <div className="mt-4 ml-4 grid grid-cols-6 gap-y-2">
                <Link className="toggle duration-300" href="https://developer.mozilla.org/en-US/docs/Web/HTML"><RiHtml5Fill className="text-[50px]"/></Link>
                <Link className="toggle duration-300" href="https://developer.mozilla.org/en-US/docs/Web/CSS"><RiCss3Fill className="text-[50px]"/></Link>
                <Link className="toggle duration-300" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><RiJavascriptFill className="text-[50px]"/></Link>
                <Link className="toggle duration-300" href="https://tailwindcss.com/docs"><RiTailwindCssFill className="text-[50px]"/></Link>
                <Link className="toggle duration-300" href="https://react.dev/learn"><RiReactjsFill className="text-[50px]"/></Link>
                <Link className="toggle duration-300" href="https://nextjs.org/docs"><RiNextjsFill className="text-[50px]"/></Link>
              </div>
              <p className="text-[20px] font-light mt-12">อื่น ๆ</p>
              <div className="mt-4 ml-4 grid grid-cols-6 gap-y-2">
                <Link className="toggle duration-300" href="https://helpx.adobe.com/photoshop/user-guide.html"><SiAdobephotoshop className="text-[50px]"/></Link>
                <Link className="toggle duration-300" href="https://www.canva.com/help/"><SiCanva className="text-[50px]"/></Link>
              </div>
            </div>
          </div>
          <div className="w-[45%] min-h-[500px] h-auto p-4 rounded-lg info">
            <h2 className="text-[24px]">
              <span>ผลงาน </span>
              (<Link className="text-[20px] active-link underline" href="https://github.com/Torsumethkk123?tab=repositories">Github</Link>)
            </h2>
            <Suspense fallback={<LoadRing/>}>
              <Repos/>
            </Suspense>
          </div>
        </div>

        <div className="mt-6"/>
        <h2 className="text-[30px]"><span>ช่องทางการติดต่อ </span></h2>
          <ul className="ml-12 mt-6 space-y-2 text-[20px]">
            <li className="flex items-center space-x-2"><FaGithub className="text-[24px]"/><p><span>Github : </span><Link className="active-link" href="https://github.com/Torsumethkk123">https://github.com/Torsumethkk123</Link></p></li>
            <li className="flex items-center space-x-2"><FaFacebook className="text-[24px]"/><p><span>Facebook : </span><Link className="active-link" href="https://web.facebook.com/Torlol46864">https://web.facebook.com/Torlol46864</Link></p></li>
            <li className="flex items-center space-x-2"><SiGmail className="text-[24px]"/><p><span>Gmail : </span><Link className="active-link" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwCqSCzPRBsCNdbHsxmspjKTkmLTcVjqwDfSGVZSbVgdqKHSvGXbsBZcRhKtTvlDXvXVCM">torsumethkk@gmail.com</Link></p></li>
        </ul>
      </div>
    </div>
  )
}