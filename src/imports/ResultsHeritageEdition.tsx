import svgPaths from "./svg-olt7i40grz";
import imgMurrayParkwayGolfCourse from "figma:asset/a37cda95ae22a352a5718ecd8d306bbfd927a4be.png";
import imgMickRileyGolfCourse from "figma:asset/100af95c520e39eaa7e4a04c27307fbe6d33736a.png";
import imgOldMillGolfCourse from "figma:asset/53f8896a898973f546cc837ad6f04d7eb425893b.png";
import imgRiverOaksGolfCourse from "figma:asset/a44cee5dca3cfa16925ad60c569daa03d1d66b55.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Serif:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ecfdf5] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">GolfTime</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pb-[6px] relative" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#facc15] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#facc15] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">FIND TIMES</p>
      </div>
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center pr-[1.99px] py-[0.55px] relative shrink-0" data-name="Link:css-transform">
      <div className="flex h-[20.9px] items-center justify-center relative shrink-0 w-[75.9px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Link">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(209,250,229,0.8)] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">WEATHER</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[32px] relative self-stretch shrink-0" data-name="Link:margin">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative" data-name="Link">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(209,250,229,0.8)] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">SAVED COURSES</p>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[32px] relative self-stretch shrink-0" data-name="Link:margin">
      <Link2 />
    </div>
  );
}

function NavigationLinks() {
  return (
    <div className="content-stretch flex items-start pl-[2px] relative shrink-0" data-name="Navigation Links">
      <LinkCssTransform />
      <LinkMargin />
      <LinkMargin1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #ECFDF5)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIconsButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Trailing Icons → Button">
      <Container1 />
    </div>
  );
}

function TopNavBarSharedComponent() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(6,78,59,0.9)] max-w-[1536px] relative shrink-0 w-full z-[2]" data-name="TopNavBar (Shared Component)">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pl-[32px] pr-[32.01px] py-[16px] relative size-full">
          <Container />
          <NavigationLinks />
          <TrailingIconsButton />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#004d34] text-[24px] tracking-[0.6px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[32px]">Filter Results</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[14px] w-full">
        <p className="leading-[20px]">Refine your tee time</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[24px] relative size-full">
        <Heading1 />
        <Container4 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667">
        <g id="Container">
          <path d={svgPaths.p3bb7dc80} fill="var(--fill-0, #3F4943)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Container5 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">DATE</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p10965ac0} fill="var(--fill-0, #3F4943)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[24px]">October 2023</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[7px] relative shrink-0 w-[4.317px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31667 7">
        <g id="Container">
          <path d={svgPaths.p35022f90} fill="var(--fill-0, #3F4943)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container9 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container8 />
      <Button1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">SU</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">MO</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="col-3 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">TU</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-4 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">WE</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="col-5 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">TH</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="col-6 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">FR</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="col-7 content-stretch flex flex-col items-center justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">SA</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="gap-x-[4px] gap-y-[4px] grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[_16px] pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="col-1 content-stretch flex flex-col items-center justify-self-stretch py-[4px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(63,73,67,0.3)] text-center whitespace-nowrap">
        <p className="leading-[20px]">29</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="col-2 content-stretch flex flex-col items-center justify-self-stretch py-[4px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(63,73,67,0.3)] text-center whitespace-nowrap">
        <p className="leading-[20px]">30</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-3 content-stretch flex flex-col items-center justify-self-stretch py-[4px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(63,73,67,0.3)] text-center whitespace-nowrap">
        <p className="leading-[20px]">31</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="col-4 content-stretch flex flex-col items-center justify-center justify-self-start px-[10.3px] py-[4px] relative rounded-[2px] row-1 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="col-5 content-stretch flex flex-col items-center justify-center justify-self-start pl-[8.95px] pr-[8.97px] py-[4px] relative rounded-[2px] row-1 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">2</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#004d34] col-6 content-stretch flex flex-col items-center justify-center justify-self-start pl-[8.49px] pr-[8.48px] py-[4px] relative rounded-[2px] row-1 self-start shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="col-7 content-stretch flex flex-col items-center justify-center justify-self-start pl-[8.74px] pr-[8.75px] py-[4px] relative rounded-[2px] row-1 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">4</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="col-1 content-stretch flex flex-col items-center justify-center justify-self-start pl-[8.66px] pr-[8.65px] py-[4px] relative rounded-[2px] row-2 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">5</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="col-2 content-stretch flex flex-col items-center justify-center justify-self-start px-[8.78px] py-[4px] relative rounded-[2px] row-2 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">6</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="col-3 content-stretch flex flex-col items-center justify-center justify-self-start pl-[8.92px] pr-[8.94px] py-[4px] relative rounded-[2px] row-2 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">7</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="col-4 content-stretch flex flex-col items-center justify-center justify-self-start px-[8.61px] py-[4px] relative rounded-[2px] row-2 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">8</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="col-5 content-stretch flex flex-col items-center justify-center justify-self-start pl-[8.77px] pr-[8.76px] py-[4px] relative rounded-[2px] row-2 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">9</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="col-6 content-stretch flex flex-col items-center justify-center justify-self-start px-[6px] py-[4px] relative rounded-[2px] row-2 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">10</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="col-7 content-stretch flex flex-col items-center justify-center justify-self-start pl-[7.44px] pr-[7.45px] py-[4px] relative rounded-[2px] row-2 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">11</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="col-1 content-stretch flex flex-col items-center justify-center justify-self-start pl-[6.11px] pr-[6.12px] py-[4px] relative rounded-[2px] row-3 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">12</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="col-2 content-stretch flex flex-col items-center justify-center justify-self-start pl-[5.88px] pr-[5.87px] py-[4px] relative rounded-[2px] row-3 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">13</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="col-3 content-stretch flex flex-col items-center justify-center justify-self-start px-[5.89px] py-[4px] relative rounded-[2px] row-3 self-start shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#064e3b] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">14</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="gap-x-[4px] gap-y-[4px] grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[___28px_28px_28px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#064e3b] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative size-full">
        <Container6 />
        <Container10 />
        <Container18 />
      </div>
    </div>
  );
}

function DatePicker() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Date Picker">
      <Heading2 />
      <BackgroundBorder />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p29478120} fill="var(--fill-0, #3F4943)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Container22 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">TIME OF DAY</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#082013] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Morning (5-10am)</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#bec9c1] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
      <Margin1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pf079980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#004d34] mr-[-1px] relative rounded-[2px] shrink-0 size-[18px]" data-name="Input">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-1px] pl-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Midday (10am-2pm)</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex items-center left-[-1px] pr-px right-0 top-[8px]" data-name="Label">
      <Input />
      <Margin2 />
    </div>
  );
}

function LabelMargin() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Label:margin">
      <Label1 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#082013] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Afternoon (2pm-7pm)</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#bec9c1] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
      <Margin3 />
    </div>
  );
}

function LabelMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Label:margin">
      <Label2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <LabelMargin />
      <LabelMargin1 />
    </div>
  );
}

function TimeOfDay() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Time of Day">
      <Heading3 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.917px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.91667 11.6667">
        <g id="Container">
          <path d={svgPaths.pcffae00} fill="var(--fill-0, #3F4943)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <Container24 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">HOLES</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3851da00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#004d34] mr-[-1px] relative rounded-[16px] shrink-0 size-[18px]" data-name="Input">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Svg1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-1px] pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">18 Holes</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-[-1px] pr-px top-0" data-name="Label">
      <Input1 />
      <Margin4 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#082013] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">9 Holes</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-name="Label">
      <div className="bg-white relative rounded-[16px] shrink-0 size-[16px]" data-name="Input">
        <div aria-hidden="true" className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none rounded-[16px]" />
      </div>
      <Margin5 />
    </div>
  );
}

function LabelMargin2() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-[80.25px] pl-[16px] top-0" data-name="Label:margin">
      <Label4 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <LabelMargin2 />
    </div>
  );
}

function Holes() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Holes">
      <Heading4 />
      <Container25 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] tracking-[-0.28px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          <p className="leading-[20px]">Weekend Forecast</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Fri</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 16.5">
        <g id="Container">
          <path d={svgPaths.p207d5180} fill="var(--fill-0, #705D00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">72° / 55°</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.01px] relative size-full">
          <Container28 />
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Sat</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 15">
        <g id="Container">
          <path d={svgPaths.p3d79d500} fill="var(--fill-0, #705D00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">75° / 58°</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.01px] relative size-full">
          <Container32 />
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Sun</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[15.014px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15.0139">
        <g id="Container">
          <path d={svgPaths.p3f5e8380} fill="var(--fill-0, #3F4943)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">68° / 52°</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Container27 />
        <Container31 />
        <Container35 />
      </div>
    </div>
  );
}

function WeekendForecast() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 w-full" data-name="Weekend Forecast">
      <div aria-hidden="true" className="absolute border border-[rgba(190,201,193,0.15)] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[17px] relative size-full">
        <Heading5 />
        <Container26 />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] relative size-full">
        <DatePicker />
        <TimeOfDay />
        <Holes />
        <WeekendForecast />
      </div>
    </div>
  );
}

function AsideSideNavBarSharedComponentAdaptedForFiltersContext() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex flex-col h-[1088px] items-start overflow-clip py-[32px] relative shadow-[0px_20px_25px_-5px_rgba(2,44,34,0.05),0px_8px_10px_-6px_rgba(2,44,34,0.05)] shrink-0 w-[288px]" data-name="Aside - SideNavBar (Shared Component - Adapted for Filters context)">
      <Margin />
      <Nav />
    </div>
  );
}

function MurrayParkwayGolfCourse() {
  return (
    <div className="h-[56px] max-w-[928px] relative rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[80px]" data-name="Murray Parkway Golf Course">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2px]">
        <img alt="" className="absolute h-[142.86%] left-0 max-w-none top-[-21.43%] w-full" src={imgMurrayParkwayGolfCourse} />
      </div>
    </div>
  );
}

function ImgMurrayParkwayGolfCourseMargin() {
  return (
    <div className="h-[56px] max-w-[944px] relative shrink-0 w-[96px]" data-name="Img - Murray Parkway Golf Course:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pr-[16px] relative size-full">
        <MurrayParkwayGolfCourse />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[16px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[24px]">Murray Parkway</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] w-full">
        <p className="leading-[16px]">Murray, UT • 2.4 mi</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Heading6 />
      <Container41 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="col-[5/span_2] h-[28px] justify-self-stretch leading-[0] relative row-1 self-center shrink-0 text-[#004d34] text-center tracking-[-0.36px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center left-[calc(50%-9.65px)] text-[18px] top-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[28px]">10:15</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center left-[calc(50%+23.17px)] not-italic text-[12px] top-[18px] uppercase">
        <p className="leading-[16px]">AM</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
        <g id="Container">
          <path d={svgPaths.p3b9f7a80} fill="var(--fill-0, #705D00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="col-[7/span_2] content-stretch flex flex-col gap-[2px] items-center justify-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container43 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">70°</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">18 HOLES</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">$45</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="col-[9/span_2] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#004d34] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">BOOK</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="col-[11/span_2] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[8px] relative size-full">
          <Button16 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_40px] relative size-full">
        <Container40 />
        <Paragraph />
        <Container42 />
        <Container44 />
        <Container47 />
      </div>
    </div>
  );
}

function RowItem() {
  return (
    <div className="absolute bg-white left-[32px] right-[32px] rounded-[2px] top-0" data-name="Row Item 1">
      <div className="content-stretch flex items-center overflow-clip p-[9px] relative rounded-[inherit] size-full">
        <ImgMurrayParkwayGolfCourseMargin />
        <Container39 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,201,193,0.15)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function MickRileyGolfCourse() {
  return (
    <div className="h-[56px] max-w-[928px] relative rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[80px]" data-name="Mick Riley Golf Course">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2px]">
        <img alt="" className="absolute h-[142.86%] left-0 max-w-none top-[-21.43%] w-full" src={imgMickRileyGolfCourse} />
      </div>
    </div>
  );
}

function ImgMickRileyGolfCourseMargin() {
  return (
    <div className="h-[56px] max-w-[944px] relative shrink-0 w-[96px]" data-name="Img - Mick Riley Golf Course:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pr-[16px] relative size-full">
        <MickRileyGolfCourse />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[16px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[24px]">Mick Riley</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] w-full">
        <p className="leading-[16px]">Murray, UT • 3.1 mi</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Heading7 />
      <Container50 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="col-[5/span_2] h-[28px] justify-self-stretch leading-[0] relative row-1 self-center shrink-0 text-[#004d34] text-center tracking-[-0.36px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center left-[calc(50%-9.65px)] text-[18px] top-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[28px]">10:40</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center left-[calc(50%+23.17px)] not-italic text-[12px] top-[18px] uppercase">
        <p className="leading-[16px]">AM</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 size-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
        <g id="Container">
          <path d={svgPaths.p3b9f7a80} fill="var(--fill-0, #705D00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="col-[7/span_2] content-stretch flex flex-col gap-[2px] items-center justify-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container52 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">71°</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">18 HOLES</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">$42</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-[9/span_2] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#004d34] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">BOOK</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="col-[11/span_2] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[8px] relative size-full">
          <Button17 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_40px] relative size-full">
        <Container49 />
        <Paragraph1 />
        <Container51 />
        <Container53 />
        <Container56 />
      </div>
    </div>
  );
}

function RowItem1() {
  return (
    <div className="absolute bg-white left-[32px] right-[32px] rounded-[2px] top-[82px]" data-name="Row Item 2">
      <div className="content-stretch flex items-center overflow-clip p-[9px] relative rounded-[inherit] size-full">
        <ImgMickRileyGolfCourseMargin />
        <Container48 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,201,193,0.15)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p27589980} fill="var(--fill-0, #BEC9C1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#d3efd9] content-stretch flex h-[56px] items-center justify-center relative rounded-[2px] shrink-0 w-[80px]" data-name="Background">
      <Container57 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[56px] relative shrink-0 w-[96px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[16px] relative size-full">
        <Background />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[16px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[24px]">Meadow Brook</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] w-full">
        <p className="leading-[16px]">Taylorsville, UT • 5.2 mi</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Heading8 />
      <Container60 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="col-[5/span_2] h-[28px] justify-self-stretch leading-[0] relative row-1 self-center shrink-0 text-[#004d34] text-center tracking-[-0.36px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center left-[calc(50%-9.65px)] text-[18px] top-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[28px]">11:15</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center left-[calc(50%+23.17px)] not-italic text-[12px] top-[18px] uppercase">
        <p className="leading-[16px]">AM</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 11.6667">
        <g id="Container">
          <path d={svgPaths.p2a352180} fill="var(--fill-0, #705D00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="col-[7/span_2] content-stretch flex flex-col gap-[2px] items-center justify-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container62 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">72°</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#705d00] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">HOT DEAL</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] leading-[0] relative shrink-0 text-center w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center left-[calc(50%-11.48px)] text-[#004d34] text-[14px] top-[10px]">
        <p className="leading-[20px]">{`$35 `}</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center left-[calc(50%+15.47px)] text-[#3f4943] text-[12px] top-[11px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[16px] line-through">$50</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="col-[9/span_2] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container64 />
      <Paragraph3 />
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#004d34] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">BOOK</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="col-[11/span_2] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[8px] relative size-full">
          <Button18 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_40px] relative size-full">
        <Container59 />
        <Paragraph2 />
        <Container61 />
        <Container63 />
        <Container65 />
      </div>
    </div>
  );
}

function RowItem2() {
  return (
    <div className="absolute bg-white left-[32px] right-[32px] rounded-[2px] top-[164px]" data-name="Row Item 3">
      <div className="content-stretch flex items-center overflow-clip p-[9px] relative rounded-[inherit] size-full">
        <Margin6 />
        <Container58 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,201,193,0.15)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function OldMillGolfCourse() {
  return (
    <div className="h-[56px] max-w-[928px] relative rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[80px]" data-name="Old Mill Golf Course">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2px]">
        <img alt="" className="absolute h-[142.86%] left-0 max-w-none top-[-21.43%] w-full" src={imgOldMillGolfCourse} />
      </div>
    </div>
  );
}

function ImgOldMillGolfCourseMargin() {
  return (
    <div className="h-[56px] max-w-[944px] relative shrink-0 w-[96px]" data-name="Img - Old Mill Golf Course:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pr-[16px] relative size-full">
        <OldMillGolfCourse />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[16px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[24px]">Old Mill</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] w-full">
        <p className="leading-[16px]">Holladay, UT • 6.8 mi</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Heading9 />
      <Container68 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="col-[5/span_2] h-[28px] justify-self-stretch leading-[0] relative row-1 self-center shrink-0 text-[#004d34] text-center tracking-[-0.36px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center left-[calc(50%-9.49px)] text-[18px] top-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[28px]">12:30</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center left-[calc(50%+23.18px)] not-italic text-[12px] top-[18px] uppercase">
        <p className="leading-[16px]">PM</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 size-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
        <g id="Container">
          <path d={svgPaths.p3b9f7a80} fill="var(--fill-0, #705D00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="col-[7/span_2] content-stretch flex flex-col gap-[2px] items-center justify-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container70 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">75°</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">18 HOLES</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">$65</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="col-[9/span_2] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#004d34] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">BOOK</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="col-[11/span_2] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[8px] relative size-full">
          <Button19 />
        </div>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_40px] relative size-full">
        <Container67 />
        <Paragraph4 />
        <Container69 />
        <Container71 />
        <Container74 />
      </div>
    </div>
  );
}

function RowItem3() {
  return (
    <div className="absolute bg-white left-[32px] right-[32px] rounded-[2px] top-[246px]" data-name="Row Item 4">
      <div className="content-stretch flex items-center overflow-clip p-[9px] relative rounded-[inherit] size-full">
        <ImgOldMillGolfCourseMargin />
        <Container66 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,201,193,0.15)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function RiverOaksGolfCourse() {
  return (
    <div className="h-[56px] max-w-[928px] relative rounded-[2px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-[80px]" data-name="River Oaks Golf Course">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2px]">
        <img alt="" className="absolute h-[142.86%] left-0 max-w-none top-[-21.43%] w-full" src={imgRiverOaksGolfCourse} />
      </div>
    </div>
  );
}

function ImgRiverOaksGolfCourseMargin() {
  return (
    <div className="h-[56px] max-w-[944px] relative shrink-0 w-[96px]" data-name="Img - River Oaks Golf Course:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pr-[16px] relative size-full">
        <RiverOaksGolfCourse />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[16px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[24px]">River Oaks</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] w-full">
        <p className="leading-[16px]">Sandy, UT • 7.1 mi</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="col-[1/span_4] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Heading10 />
      <Container77 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="col-[5/span_2] h-[28px] justify-self-stretch leading-[0] relative row-1 self-center shrink-0 text-[#004d34] text-center tracking-[-0.36px] whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center left-[calc(50%-9.49px)] text-[18px] top-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[28px]">1:15</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center left-[calc(50%+18.27px)] not-italic text-[12px] top-[18px] uppercase">
        <p className="leading-[16px]">PM</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="relative shrink-0 size-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
        <g id="Container">
          <path d={svgPaths.p3b9f7a80} fill="var(--fill-0, #705D00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="col-[7/span_2] content-stretch flex flex-col gap-[2px] items-center justify-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container79 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[16px]">76°</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">18 HOLES</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">$48</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="col-[9/span_2] content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container81 />
      <Container82 />
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#004d34] content-stretch flex items-center justify-center px-[16px] py-[6px] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">BOOK</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="col-[11/span_2] justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pr-[8px] relative size-full">
          <Button20 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_40px] relative size-full">
        <Container76 />
        <Paragraph5 />
        <Container78 />
        <Container80 />
        <Container83 />
      </div>
    </div>
  );
}

function RowItem4() {
  return (
    <div className="absolute bg-white left-[32px] right-[32px] rounded-[2px] top-[328px]" data-name="Row Item 5">
      <div className="content-stretch flex items-center overflow-clip p-[9px] relative rounded-[inherit] size-full">
        <ImgRiverOaksGolfCourseMargin />
        <Container75 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(190,201,193,0.15)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[20px]">End of available times for your criteria.</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] pb-[32px] pt-[17px] right-[32px] top-[434px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(190,201,193,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Container84 />
    </div>
  );
}

function ResultsListCompactRows() {
  return (
    <div className="absolute inset-[120px_0_57px_0] overflow-clip" data-name="Results List (Compact Rows)">
      <RowItem />
      <RowItem1 />
      <RowItem2 />
      <RowItem3 />
      <RowItem4 />
      <HorizontalBorder />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[24px]">GolfTime</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">© 2023 GolfTime Inc.</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] relative size-full">
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#defbe4] content-stretch flex flex-col items-start left-0 pb-[16px] pt-[17px] px-[32px] right-0 top-[959px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(190,201,193,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <Container85 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[36px] tracking-[-0.72px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[40px]">Available Times</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #3F4943)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container91 />
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Murray, UT • Midday (10am-2pm) • Oct 3</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-[7.5px] items-start relative shrink-0 w-[305.553px]" data-name="Container">
      <Heading />
      <Container90 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] text-right tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">RESULTS</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-end relative shrink-0" data-name="Container">
      <Container93 />
      <div className="flex flex-col font-['Noto_Serif:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[24px] text-right tracking-[-0.48px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[32px]">24</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container92 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(233,255,237,0.9)] content-stretch flex flex-col items-start left-0 px-[32px] py-[24px] right-0 top-0" data-name="Header">
      <Container88 />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="bg-[#e9ffed] flex-[1_0_0] h-[1016px] min-w-px relative" data-name="Main Content Area">
      <ResultsListCompactRows />
      <Footer />
      <Header />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[1024px] items-start max-w-[1536px] overflow-clip relative shrink-0 w-full z-[1]" data-name="Container">
      <AsideSideNavBarSharedComponentAdaptedForFiltersContext />
      <MainContentArea />
    </div>
  );
}

export default function ResultsHeritageEdition() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(233, 255, 237) 0%, rgb(233, 255, 237) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Results - Heritage Edition">
      <TopNavBarSharedComponent />
      <Container2 />
    </div>
  );
}