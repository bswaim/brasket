import React from "react";
import Resume from "./downloads/Brandy_Brasket__Resume_Frontend_Engineer.pdf"
import CoverLetter from "./downloads/Brandy_Brasket__Cover_Letter__Frontend_Engineer.pdf"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faExternalLink, faFontAwesome} from "@fortawesome/free-solid-svg-icons";
import {faCss3,  faGithubSquare, faHtml5, faJs, faLinkedin, faReact} from "@fortawesome/free-brands-svg-icons";
import {DemoSection} from "./components/molecule/DemoSection";
import {CHARITY_DEMO, CONTACT_FORM_DEMO, TO_DO_DEMO} from "./constants/constants";


function App() {
  return (
      <>
      <div className='bg-white h-full w-full p-4 text-left' data-testid='page' id='page'>
          {/* HEADER - name and contact info and links */}
          <header className='border-solid border-b-black border-b-2' id='header-id' data-testid='header-id'>
              <div className='flex justify-between pb-6' >
                  <h1 className='text-lg font-semibold'>Brandy B. Brasket - Front-End Developer</h1>
                  {/* LINKS */}
                  <div id='icons' className='opacity-75'>
                      <FontAwesomeIcon textAnchor='HTML' icon={faHtml5} size='2xl' />
                      <FontAwesomeIcon textAnchor='CSS' icon={faCss3} size='2xl' />
                      <FontAwesomeIcon textAnchor='JS' icon={faJs} size='2xl' />
                      <FontAwesomeIcon textAnchor='React' icon={faReact} size='2xl' />
                      <FontAwesomeIcon textAnchor='Font Awesome' icon={faFontAwesome} size='2xl' />
                  </div>
              </div>
              <div className='flex justify-between pb-2' >
                  <div>
                      <a
                          // className='underline'
                          href='https://github.com/bswaim'
                          target='_blank'
                          aria-label='See my recommendations on LinkedIn'
                      >
                          <FontAwesomeIcon textAnchor='GitHub' icon={faGithubSquare} size='xl' />
                      </a>
                  </div>
                  <div>
                      <a
                          // className='underline'
                          href='https://www.linkedin.com/in/brandy-brasket-84689746'
                          target='_blank'
                          aria-label='See my recommendations on LinkedIn'
                      >
                          <FontAwesomeIcon textAnchor='LinkedIn' icon={faLinkedin} size='xl' />
                      </a>
                  </div>
                  <div>
                      <a
                          className='italic'
                          href={Resume}
                          download="Brandy_Brasket__Resume_Frontend_Engineer"
                          target='_blank'
                      >
                          resume &nbsp;
                          <FontAwesomeIcon icon={faDownload} />
                      </a>
                  </div>
                  <div>
                      <a
                          className='italic'
                          href={CoverLetter}
                          download='Brandy_Brasket__Cover_Letter__Frontend_Engineer'
                          target='_blank'
                      >
                          cover letter &nbsp;
                          <FontAwesomeIcon icon={faDownload} />
                      </a>
                  </div>
                  <div>
                      <a
                          className='italic'
                          href='https://www.linkedin.com/in/brandy-brasket-84689746/details/recommendations/'
                          target='_blank'
                          aria-label='See my recommendations on LinkedIn'
                      >
                          Recommendations <FontAwesomeIcon icon={faExternalLink} />
                      </a>
                  </div>
              </div>
          </header>
          <ul>
              {/* MEAL SERVICE */}
              <li>
                  <DemoSection
                      linkToLiveDemo='https://bswaim.github.io/meal-plan-demo'
                      linkToSourceCode='https://github.com/bswaim/meal-plan-demo'
                      thumbnailImage='https://bswaim.github.io/brasket/Logo.png' // todo: update this once the demo is done
                      title="Meal Delivery Plan Demo"
                      id="meal-plan-preview"
                  />
              </li>
              {/* FINANCIAL DATA */}
              <li>
                  <DemoSection
                      linkToLiveDemo='https://bswaim.github.io/financial-demo'
                      linkToSourceCode='https://github.com/bswaim/'
                      thumbnailImage='https://bswaim.github.io/brasket/Logo.png' // todo: update this once the demo is done
                      title="Finance Demo"
                      id="meal-plan-preview"
                  />
              </li>
              {/* CHARITY */}
              <li>
                  <DemoSection
                      linkToLiveDemo={`https://bswaim.github.io/${CHARITY_DEMO}`}
                      linkToSourceCode={`https://github.com/bswaim/${CHARITY_DEMO}`}
                      thumbnailImage='https://bswaim.github.io/brasket/Logo.png' // todo: update this to ${CHARITY_DEMO}.png once the demo is done
                      title="Charity Demo"
                      id="charity-preview"
                  />
              </li>
              {/* CONTACT FORM */}
              <li>
                  <DemoSection
                      linkToLiveDemo={`https://bswaim.github.io/${CONTACT_FORM_DEMO}`}
                      linkToSourceCode={`https://github.com/bswaim/${CONTACT_FORM_DEMO}`}
                      thumbnailImage='https://bswaim.github.io/brasket/Logo.png' // todo: update this once the demo is done
                      title="Contact Form Demo"
                      id="contact-preview"
                  />
              </li>
              {/* TO DO */}
              <li>
                  <DemoSection
                      linkToLiveDemo={`https://bswaim.github.io/${TO_DO_DEMO}`}
                      linkToSourceCode={`https://github.com/bswaim/${TO_DO_DEMO}`}
                      thumbnailImage={`https://bswaim.github.io/brasket/thumbnails${TO_DO_DEMO}.png`}
                      title="Classic To Do"
                      id="todo-demo-preview"
                  />
              </li>
          </ul>
      </div>
      </>
  );
}

export default App;
