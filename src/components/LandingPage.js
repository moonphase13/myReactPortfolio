import React from 'react';

export default function LandingPage() {
  const style = {
    'width': '530px',
    'min-height': '700px',
    'border': 'none',
    'border-radius': '20px',
    'overflow': 'hidden',
  }
  return (
    <div className="flex flex-col justify-center">
      <h2 className="animate-pulse font-bold underline">Loading Page</h2>
      <div className="animate-pulse border border-white shadow rounded-md p-4 max-w-lg w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <iframe src="https://funhtml5games.com?embed=2048bit" style={style} frameborder="0" className='self-center m-5'></iframe>
    </div>
  );
}
