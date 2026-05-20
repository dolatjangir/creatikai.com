import React from 'react';

export default function MortgageLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8 font-sans selection:bg-blue-200">
     

      {/* Hero Section */}
      <header className="pt-16 pb-12 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-semibold mb-8">
          <span>★ 5.0 Stars</span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-600">Based On 20,000+ Reviews</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-gray-900 max-w-4xl mb-6 leading-tight">
          For people who don't take home ownership lightly
        </h1>
        
        <p className="text-gray-500 max-w-2xl mb-10">
          Effortless process. Fast approval. Personal mortgage expert. Finally, a home loan made for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-medium transition-colors">
            Get Started
          </button>
          <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-900 px-8 py-3.5 rounded-full font-medium transition-colors">
            Schedule A Demo
          </button>
        </div>

        {/* Hero Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          {/* Blue Left Card */}
          <div className="lg:col-span-4 bg-blue-600 rounded-[2rem] p-8 text-white relative overflow-hidden h-[400px]">
            <div className="inline-flex items-center gap-2 bg-blue-800/40 px-3 py-1 rounded-full text-xs font-medium mb-8 backdrop-blur-sm">
              Mortgage Interest <span className="bg-white text-blue-600 w-4 h-4 rounded-full flex items-center justify-center text-[10px]">i</span>
            </div>
            
            <div className="bg-white rounded-2xl p-5 text-gray-900 shadow-xl w-4/5">
              <h3 className="font-semibold mb-4">Finance.</h3>
              <p className="text-xs text-gray-500 mb-1">Today's Rate</p>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold">3.254%</span>
                <button className="bg-gray-100 text-xs px-3 py-1.5 rounded-full font-medium">Compare</button>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100" alt="Agent" className="w-8 h-8 rounded-full border-2 border-white" />
              <span className="text-sm font-medium">Analyzing...</span>
            </div>
          </div>

          {/* Light Right Card */}
          <div className="lg:col-span-8 bg-gray-50 rounded-[2rem] p-8 relative h-[400px] overflow-hidden">
            <h3 className="text-xl font-bold mb-6">Tools that help you succeed</h3>
            
            <div className="flex h-full gap-6">
              {/* Image with overlay */}
              <div className="relative w-1/2 h-[260px] rounded-2xl overflow-hidden hidden md:block">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80" alt="User" className="object-cover w-full h-full" />
                <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-md rounded-xl p-3 text-white flex items-center justify-between">
                   <div>
                     <p className="text-[10px] text-gray-400">Future</p>
                     <p className="font-bold">$10,200 <span className="text-[10px] font-normal text-gray-400">Saved</span></p>
                   </div>
                   <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                     <div className="w-2 h-2 bg-white rounded-full"></div>
                   </div>
                </div>
              </div>

              {/* Table / Toggles Mockup */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <span className="text-gray-500">Loan Term</span>
                  <div className="bg-gray-200 rounded-full p-1 flex">
                    <span className="bg-white px-3 py-1 rounded-full shadow-sm text-xs">Work Fixed</span>
                    <span className="px-3 py-1 text-gray-500 text-xs">More Fixed</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-100 text-blue-600 rounded flex items-center justify-center">✦</div> Planned</div>
                  <div><p className="text-gray-400">Interest Rate</p><p className="font-bold">6.25% APR</p></div>
                  <div><p className="text-gray-400">Total Credits</p><p className="font-bold">$20,000</p></div>
                  <div><p className="text-gray-400">Monthly Payment</p><p className="font-bold">$2,468</p></div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center text-xs opacity-60">
                  <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-100 rounded flex items-center justify-center">○</div> Mortgage</div>
                  <div><p className="font-bold">7.1% APR</p></div>
                  <div><p className="font-bold">$28,000</p></div>
                  <div><p className="font-bold">$3,468</p></div>
                </div>

                <div className="flex items-center gap-2 mt-auto pb-4">
                  <span className="text-xs font-bold text-gray-500 mr-2">Tools</span>
                  <div className="flex gap-2">
                     <div className="w-8 h-8 rounded bg-gray-200"></div>
                     <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center text-xs">⌘</div>
                     <div className="w-8 h-8 rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Logos Section */}
      <section className="py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale">
          <div className="text-xl font-bold tracking-tighter">VOXMEDIA</div>
          <div className="text-xl font-semibold tracking-tight">getaround</div>
          <div className="text-xl font-bold flex items-center gap-1"><span className="text-blue-600">❖</span> docusign</div>
          <div className="text-xl font-bold tracking-tight">Deloitte.</div>
          <div className="text-xl font-bold flex items-center gap-1 text-blue-600"><span className="text-2xl">❅</span> Dropbox</div>
        </div>
      </section>

      {/* Better Rates Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
             <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
               <span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[8px]">£</span> Lowest Interest
             </div>
             <h2 className="text-4xl md:text-5xl font-serif text-gray-900 max-w-md leading-tight">
               Find out why we're better.
             </h2>
          </div>
          <div className="text-6xl md:text-8xl font-bold tracking-tighter mt-8 md:mt-0">
            +89%
          </div>
        </div>

        {/* Bar Chart Mockup */}
        <div className="w-full h-[300px] flex items-end justify-between border-b border-gray-200 pb-4 relative gap-2 md:gap-8">
           {/* Grid lines */}
           <div className="absolute top-0 w-full border-t border-gray-100"></div>
           <div className="absolute top-1/2 w-full border-t border-gray-100"></div>

           {['110.5 M', '110.5 M', '147.4M', '160.4M', '187.2M'].map((val, i) => (
             <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group">
               <span className="text-xs text-gray-400 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">{val}</span>
               <div className={`w-full transition-all duration-500 ${i === 2 ? 'bg-blue-600 h-[60%]' : 'bg-gray-100 h-[30%] hover:bg-gray-200'}`}></div>
             </div>
           ))}
        </div>
        <div className="flex justify-between mt-4 text-xs font-semibold text-gray-400 px-4 md:px-12">
          <span>Jan</span><span>Feb</span><span className="text-gray-900">Mar</span><span>May</span><span>Apr</span>
        </div>
      </section>

      {/* Features Detail Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 mb-4">
               <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> Our Products
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Everything you need<br />all in one place
            </h2>
          </div>

          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
             <div className="w-full lg:w-1/2 max-w-lg">
                <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">Same Day Mortgage</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  We offer same-day underwritten approval for eligible customers. With a complete application and required documents.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto px-12 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-blue-600/20">
                  Get Started
                </button>
                <p className="text-xs text-gray-400 mt-4 flex items-center gap-1 justify-center md:justify-start">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Same Day Mortgage Disclosure
                </p>
             </div>
             <div className="w-full lg:w-1/2 relative">
                <div className="rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] relative shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Woman smiling" className="object-cover w-full h-full" />
                   
                   {/* Floating Avatars Top Right */}
                   <div className="absolute top-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-2 flex items-center gap-3 shadow-xl">
                      <span className="text-[10px] font-bold px-2 leading-tight">Future<br/>Realtors</span>
                      <div className="flex -space-x-2">
                        <img className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="avatar" />
                        <img className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="avatar" />
                        <div className="w-6 h-6 rounded-full border border-white bg-gray-900 text-white flex items-center justify-center text-[10px]">+</div>
                      </div>
                   </div>

                   {/* Floating Rate Card */}
                   <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-2xl p-5 shadow-2xl w-48">
                      <p className="text-xs text-gray-500 font-medium mb-1">Today's Rate</p>
                      <p className="text-3xl font-bold">2.375 <span className="text-lg text-gray-400">%</span></p>
                      <div className="w-full h-1 bg-gray-100 rounded-full mt-4 overflow-hidden">
                         <div className="w-2/3 h-full bg-blue-600 rounded-full"></div>
                      </div>
                   </div>

                   {/* Floating Badges Bottom */}
                   <div className="absolute bottom-12 left-8 flex flex-col gap-2">
                      <div className="bg-white rounded-full px-4 py-2 text-xs font-bold shadow-lg flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-600 rounded-full text-white flex items-center justify-center">✓</div> Detailed Analytics
                      </div>
                      <div className="bg-gray-900 text-white rounded-full px-4 py-2 text-xs font-bold shadow-lg flex items-center gap-2">
                        <div className="w-4 h-4 border border-gray-600 rounded-full text-white flex items-center justify-center">i</div> Instant answers anytime, anywhere
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
             <div className="w-full lg:w-1/2 relative">
                <div className="rounded-3xl overflow-hidden bg-gray-900 aspect-square md:aspect-[4/3] relative shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80" alt="Man analyzing" className="object-cover w-full h-full opacity-80 mix-blend-luminosity" />
                   
                   {/* Top Left Widget */}
                   <div className="absolute top-6 left-6 bg-white rounded-xl p-3 shadow-xl flex items-center gap-3">
                     <div className="w-10 h-10 border-4 border-gray-100 border-t-gray-900 rounded-full"></div>
                     <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">Limit - Increase</p>
                       <p className="font-bold text-lg">10.9 %</p>
                     </div>
                   </div>

                   {/* Bottom Left Widget */}
                   <div className="absolute bottom-6 left-6 bg-white rounded-xl p-5 shadow-xl w-64">
                     <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Estimated Saved</p>
                     <div className="flex items-end border-b border-gray-100 pb-2 mb-2">
                       <span className="text-3xl font-bold">$1,000</span>
                       <span className="text-gray-300 text-2xl font-light">/mo</span>
                     </div>
                     <p className="text-[10px] text-gray-500 leading-tight">
                       That's $345 more savings compared to other mortgage services
                     </p>
                   </div>

                   {/* Floating pills Right */}
                   <div className="absolute bottom-20 right-6 flex flex-col gap-2">
                      <div className="bg-white rounded-full px-3 py-1.5 text-[10px] font-bold shadow-lg flex items-center gap-2">
                        <span className="text-red-500">✕</span> No hidden fees
                      </div>
                      <div className="bg-white rounded-full px-3 py-1.5 text-[10px] font-bold shadow-lg flex items-center gap-2">
                        <span className="text-green-500">✓</span> The savings never stop
                      </div>
                      <div className="bg-white rounded-full px-3 py-1.5 text-[10px] font-bold shadow-lg flex items-center gap-2">
                        <span className="text-gray-900">✧</span> Best policy, best price
                      </div>
                   </div>
                </div>
             </div>
             
             <div className="w-full lg:w-1/2 max-w-lg">
                <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">More Buying Power</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  We remove unnecessary costs from the loan process to pass the savings directly to you. By cutting out bloated fees and outdated overhead.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto px-12 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-blue-600/20">
                  Get Started
                </button>
                <p className="text-xs text-gray-400 mt-4 flex items-center gap-1 justify-center md:justify-start">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Same Day Mortgage Disclosure
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Discover More Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Discover more features</h2>
          <p className="text-gray-500 max-w-md mx-auto mb-16 text-sm">
            Private messaging and calling empower you to express your true self, communicate openly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" alt="Message Privately" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Message Privately</h4>
                <p className="text-gray-500 text-xs mb-4">Create a space in Chat to share team updates or collaborate on a project.</p>
                <a href="#" className="text-sm font-semibold flex items-center gap-1 hover:text-blue-600 transition-colors">
                  Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" alt="Stay Connected" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Stay Connected</h4>
                <p className="text-gray-500 text-xs mb-4">Create a space in Chat to share team updates or collaborate on a project.</p>
                <a href="#" className="text-sm font-semibold flex items-center gap-1 hover:text-blue-600 transition-colors">
                  Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" alt="Express Yourself" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2">Express Yourself</h4>
                <p className="text-gray-500 text-xs mb-4">Create a space in Chat to share team updates or collaborate on a project.</p>
                <a href="#" className="text-sm font-semibold flex items-center gap-1 hover:text-blue-600 transition-colors">
                  Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-3">
             <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
               <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
             </button>
             <button className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
