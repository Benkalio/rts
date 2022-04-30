import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

const CareerPage = () => {
  library.add(fas);

  return (
    <div>
      <div>
        <h1>
          We believe
          that reading
          is Magic
        </h1>
        <p>
        And that we need new tools to keep that magic alive.
        Think about a moment when a piece of writing opened
        you up to a totally new understanding of your world.
        Or when a friend had you read something that ignited a conversation
        and forced you to articulate a belief you didn’t quite have the words for. 
        <br />

        We’re building a tool to give you more of those moments.
        A tool that chooses agency over algorithm.
        Debate over noise. Quality over recency.
        We’re a team of fanatic readers who saw internet technology
        change drastically while our tools for reading remained,
        dismayingly, the same. So with the backing of GV, Y Combinator,
        and many stellar angels, we set out to build something better.
        </p>
        <h2>
        <span>We’re looking for creative,</span>
        <span>ambitious people to help us</span>
        <span>craft the future of reading.</span>
        </h2>
        <p>
          You’ll fit right in if you want to take ownership of a product,
          codebase, and company from the ground up.
          We’ve developed a passionate following because we ship fast,
          listen to our users, and sweat the details.
          We’re constantly pushing the boundaries of technology
          and design to rethink what’s possible when it comes to reading.
          If that excites you, we should talk.
        </p>
      </div>
      <div>
        <ul>
          <li>
            <a href="/">
              <div>
                <h4>Design Engineer</h4>
                <p>Fully Remote</p>
              </div>
              <div>
                {/* <FontAwesomeIcon icon="square-chevron-right" /> */}
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div>
                <h4>Software Engineer, Backend</h4>
                <p>Fully Remote</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div>
                <h4>Open Role</h4>
                <p>Fully Remote</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div id="benefits">
        <h3>Benefits</h3>
        <ul>
          <li>Top-tier health insurance</li>
          <li>Stipend for setting up personal workstation. (Fully Remote)</li>
          <li>Freedom to buy or build your ideal work setup</li>
          <li>Competitive salary and equity</li>
          <li>Unlimited resources for books</li>
        </ul>
      </div>
      <div>
        <h3>We always love to chat.</h3>
        <p>For features requests, reach out at help@stoicbible.com</p>
      </div>
    </div>
  );
}

export default CareerPage;
