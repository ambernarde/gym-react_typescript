/*tsfce */
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType,SelectedPage } from "@/shared/types";
import { 
HomeModernIcon,
UserGroupIcon,
AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value:SelectedPage) => void;
}

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title:"100´s of Diverse Facilities",
    description:"Nem adlfdl mamlfmldf anfkmdfd"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title:"State fo the Art Classes",
    description:"Nem adlfdl mamlfmldf anfkmdfd"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title:"Expert and Pro  Trainers",
    description:"dssdd dkjdskjk ksdjskjdjs"
  }
];

const container ={
  hidden: {},
  visible:{
    transition:{staggerChildren: 0.2}
  }
}

const Benefits = ({setSelectedPage}: Props) => {
  return(
    <section
      id="benefits"
      className="mx-auto- min-h-full w-5/6 py-20"
      >
       <motion.div     onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>       
          {/*header */}
          <motion.div           
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount:0.5}}
          transition={{duration: 0.5}}
          variants={{
             hidden: {opacity:0,x:-50},
             visible:{opacity:1 ,x:0}
          }}
          className="md:my-5 md:w-3/5">
            <HText>MORE THAN JUST GYM.</HText>
            <p className="my-5 text-sm">
              We provide world class fitness equipment, trainers and classes to get
              you to your ultimate fitness goals with ease. We provide true care
              into each and every member.
            </p>
          </motion.div>  
          {/*benefits */}
          <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{once:true,amount: 0.5}}
           variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex" >
             {benefits.map((benefit: BenefitType)=> (
                <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage ={setSelectedPage}
                />     
             ))}
          </motion.div>
               {/* graphics and description */}
               <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/*graphic */}
                <img className="mx-auto"
                 alt="benefits-page-graphic"
                 src={BenefitsPageGraphic}
                
                />
                {/*description*/}
                <div>
                  {/*title*/}
                  <div className="relative">
                      <div className="before:absolute before:-top-20 before: -left-20 before:z-[1] before:content-abstractwaves">
                           <motion.div
                               initial="hidden"
                               whileInView="visible"
                               viewport={{once: true, amount:0.5}}
                               transition={{duration: 0.5}}
                               variants={{
                                  hidden: {opacity:0,x:-50},
                                  visible:{opacity:1 ,x:0},
                                }}
                              >
                               <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500">FIT</span>
                               </HText>
                           </motion.div>
                      </div>
                  </div>
                  {/*descript */}
                  <motion.div 
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once: true, amount:0.5}}
                     transition={{delay:0.2,duration: 0.5}}
                     variants={{
                        hidden: {opacity:0,x:50},
                        visible:{opacity:1 ,x:0},
                      }}
                  
                  >
                    <p className="my-5">
                      Nalalm sldsld sldmslmdsmd sldmsldmslm sdlsmldmslmd
                    </p>
                    <p className="mb-5">
                      Hldksld sdlskdlsk sldsdksd ldkslkdlskmd
                    </p>
                  </motion.div>
                  {/*button*/}
                  <div className="relative mt-16">
                      <div className="before:absolute before:-botton-20 before:right-40 before: z-[-1] before:content-sparkles">
                         <ActionButton setSelectedPage={setSelectedPage}>
                               Join Now 
                         </ActionButton>
                      </div>  
                  </div>
                </div>
               </div>
       </motion.div>
    </section>
  );
}

export default Benefits;