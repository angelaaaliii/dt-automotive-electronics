import './CaseStudy3.css';

export default function CaseStudy3({title, tags, thumbnail}) {
  return (
    <div id="case-study3">
      <div class="case-title">Responsive Redesign</div>
      <div class="blurb">
        <h2>Redesigning a responsive website for a local mini golf and dairy 
        farm business in the Philadelphia area.</h2>
      </div>

      <br></br>


      <div id="tags">Skills: HTML, CSS</div>

      <div id="role">Role: Frontend Developer</div>

      <br></br>

      <div id="context"> 
        <div class="section-header">Context</div>

        I took Freddy Hill Farms's website and indentified its key accessibility, efficiency, learnability, and memorability issues. 
        Then, working to fix these problems, I redesigned the website to address these points through 
        sketching, low-fidelity wireframes, a visual style guide, and high-fidelity wireframes. 
        The end goal of the business's website focuses on its desired metric: sales and customers.
      </div>

      <br></br>

      <div id="research">

        <div class="section-header">Research</div>

        <p>
          To start, I began by analyzing the current website's features.
          From this, I guaged what features were effective and ineffective.
          <ul class="bullets">
            <li>Learnability problems displayed in green</li>
            <li>Memorability problems displayed in pink</li>
            <li>Efficiency problems displayed in blue</li>
            <li>Accessibility problems displayed in red</li>
          </ul>
        </p>

        <p>
          After analyzing the current site layout, it was clear 
          that there were a lot of issues that stemmed from lack of organization 
          and visual hierarchy. 
        </p>

      </div>

      <br></br>

      <div id="process">
        <div class="section-header">Process</div>
        <div class="subsection-header">Sketches</div>
        <p>
          To address the problems identified during the research phase, I knew 
          I wanted to focus on improving the organizational structure of the site by adding a 
          navigation bar to reduce redundancies, which caused a majority of the 
          efficiency and learnability issues.
        </p>
        <br></br>
        <p>
          So, I began by sketching 9 potential layouts of the website:
        </p>

        <p>
          After reviewing all 9 sketches, I picked several features I found the most effective
          in improving the site.
          <ul class="bullets">
            <li>Navigation bar</li>
            <li>Having all the logistical information found on the homepage 
                immediately 
                (for returning users looking for address/hours information)</li>
            <li>Photo gallery to help users understand what the business sells</li>
          </ul>
  
          So, I landed on the following final sketch:
        </p>

        <div class="subsection-header">Low-Fidelity Wireframes</div>

        <div class="subsection-header">High-Fidelity Wireframes</div>

      </div>

      <br></br>

      <div id="solution">
        <div class="section-header">Solution</div>
        <p>
          To implement the final design, I utilized HTML and CSS to create 
          a non-functional, responsive frontend website to visualize the differences. 
        </p>
        
        <a href="https://angelaaaliii.github.io/cs1300-responsive-redesign-freddy-hills/">
        </a>

      </div>

      <br></br>

      <div id="learnings">
        <div class="section-header">Learnings</div>
        <p>
          Overall, by working on this project I gained a stronger understanding
          of UI UX principles and the design process, including sketching and creating 
          low/high-fidelity wireframes. Furthermore, I learned how to critically critique and analyze
           interfaces to improve learnability, memorability, efficiency, and accessibility. 
        </p>
        <br></br>
        <p>
          As this is a family-owned mini-golf and dairy store that I have grown up with and that
          holds lots of cherished memories, I hope I was able to not only improve the site's usability, 
          but to also convey how beloved the business is to the community! 
        </p>

      </div>



    </div>
  );
}
