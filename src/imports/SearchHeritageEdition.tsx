import svgPaths from "./svg-498ksxb0qk";
import imgGradient from "figma:asset/93ebc9d7f2bc1c25d4ec06c8311466023a117bdb.png";
import imgHeroImageHeader from "figma:asset/898343feca395a20781642ae1ab9565febe9779b.png";

function Container1() {
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
    <div className="content-stretch flex flex-col items-start pb-[6px] relative" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#facc15] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Nimbus_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#facc15] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">FIND TIMES</p>
      </div>
    </div>
  );
}

function LinkCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center py-[0.55px] relative shrink-0" data-name="Link:css-transform">
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
    <div className="content-stretch flex flex-col items-start relative" data-name="Link">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(209,250,229,0.8)] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">WEATHER</p>
      </div>
    </div>
  );
}

function LinkCssTransform1() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center py-[3.4px] relative shrink-0" data-name="Link:css-transform">
      <div className="flex h-[15.2px] items-center justify-center relative shrink-0 w-[63.59px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link1 />
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative" data-name="Link">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(209,250,229,0.8)] tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">SAVED COURSES</p>
      </div>
    </div>
  );
}

function LinkCssTransform2() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start justify-center pl-[0.89px] py-[3.4px] relative shrink-0" data-name="Link:css-transform">
      <div className="flex h-[15.2px] items-center justify-center relative shrink-0 w-[111.09px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Link2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[35.7px] items-center pl-[2px] pr-[2.93px] relative shrink-0" data-name="Container">
      <LinkCssTransform />
      <LinkCssTransform1 />
      <LinkCssTransform2 />
    </div>
  );
}

function Container3() {
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

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1536px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] pl-[32px] pr-[32.01px] py-[16px] relative size-full">
          <Container1 />
          <Container2 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(6,78,59,0.9)] content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="TopNavBar">
      <Container />
      <div className="h-[4px] relative shrink-0 w-full" data-name="Gradient">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGradient} />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Liberation_Serif:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#064e3b] text-[20px] tracking-[0.5px] w-full">
        <p className="leading-[28px]">Filter Results</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(4,120,87,0.8)] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">REFINE YOUR TEE TIME</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[32px] relative size-full">
        <Heading1 />
        <Container5 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="var(--fill-0, #064E3B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#064e3b] text-[10px] tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">DATE</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pl-[20px] py-[12px] relative shrink-0 w-[256px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#eab308] border-l-4 border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function LinkCssTransform3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 w-[256px]" data-name="Link:css-transform">
      <Link3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p256e1340} fill="var(--fill-0, #047857)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(4,120,87,0.6)] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">TIME OF DAY</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pl-[16px] py-[12px] relative shrink-0 w-[256px]" data-name="Link">
      <Container8 />
      <Container9 />
    </div>
  );
}

function LinkCssTransform4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 w-[256px]" data-name="Link:css-transform">
      <Link4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
        <g id="Container">
          <path d={svgPaths.p2d0efbc0} fill="var(--fill-0, #047857)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(4,120,87,0.6)] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">HOLES</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pl-[16px] py-[12px] relative shrink-0 w-[256px]" data-name="Link">
      <Container10 />
      <Container11 />
    </div>
  );
}

function LinkCssTransform5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 w-[256px]" data-name="Link:css-transform">
      <Link5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="var(--fill-0, #047857)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nimbus_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(4,120,87,0.6)] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PRICE RANGE</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pl-[16px] py-[12px] relative shrink-0 w-[256px]" data-name="Link">
      <Container12 />
      <Container13 />
    </div>
  );
}

function LinkCssTransform6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0 w-[256px]" data-name="Link:css-transform">
      <Link6 />
    </div>
  );
}

function Nav() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Nav">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative size-full">
        <LinkCssTransform3 />
        <LinkCssTransform4 />
        <LinkCssTransform5 />
        <LinkCssTransform6 />
      </div>
    </div>
  );
}

function AsideSideNavBar() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex flex-col h-[1154px] items-start py-[32px] relative shrink-0 w-[288px] z-[2]" data-name="Aside - SideNavBar">
      <Margin />
      <Nav />
      <div className="absolute bg-gradient-to-l bottom-0 from-[#e9ffed] right-0 to-[rgba(233,255,237,0)] top-0 w-[32px]" data-name="Gradient" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shadow-[0px_4px_3px_0px_rgba(0,0,0,0.1),0px_10px_8px_0px_rgba(0,0,0,0.04)] shrink-0 w-[672px]" data-name="Heading 1">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[56px] text-white tracking-[-1.12px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[70px] mb-0">The Perfect Round</p>
        <p className="leading-[70px]">Awaits.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 p-[48px] right-0" data-name="Container">
      <Heading />
    </div>
  );
}

function HeroImageHeader() {
  return (
    <div className="absolute h-[320px] left-0 overflow-clip right-0 top-0" data-name="Hero Image Header">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[310%] left-0 max-w-none top-[-105%] w-full" src={imgHeroImageHeader} />
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(0,77,52,0.3)] inset-0 to-[#e9ffed] via-1/2 via-[rgba(0,77,52,0)]" data-name="Gradient" />
      <Container14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#004d34] text-[30px] tracking-[-0.6px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[36px]">Find Tee Times</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[16px] w-full">
        <p className="leading-[24px]">Curate your next experience on the links.</p>
      </div>
    </div>
  );
}

function FormHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form Header">
      <Heading2 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">SEARCH TIMES</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p304eaa0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#004d34] content-stretch flex gap-[8px] items-center px-[32px] py-[16px] relative rounded-[2px] shrink-0" data-name="Button">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="Action">
      <Button1 />
    </div>
  );
}

function ActionMargin() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col items-start justify-self-stretch pt-[24px] relative row-4 self-start shrink-0" data-name="Action:margin">
      <Action />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">LOCATION</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#082013] text-[18px] w-full">
          <p className="leading-[28px]">Murray, UT</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pl-[32px] pr-[12px] pt-[8px] relative size-full">
          <Container19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(190,201,193,0.2)] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bottom-[23.91%] content-stretch flex flex-col items-start left-0 top-[23.91%]" data-name="Container">
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #6F7A72)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container20 />
    </div>
  );
}

function Location() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Location">
      <Label />
      <Container18 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">RADIUS</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="SVG">
          <path d={svgPaths.p2fccf000} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.025" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#082013] text-[18px] w-full">
          <p className="leading-[28px]">25 Miles</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border-[rgba(190,201,193,0.2)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[10px] pr-[40px] pt-[8px] relative size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pb-[10.5px] pl-[203.67px] pr-[8px] pt-[8.5px] relative rounded-[inherit] size-full">
            <Svg />
          </div>
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bottom-[23.91%] content-stretch flex flex-col items-start right-[-0.01px] top-[23.91%]" data-name="Container">
      <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.4">
          <path d={svgPaths.p1adfde00} fill="var(--fill-0, #6F7A72)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Options />
      <Container23 />
    </div>
  );
}

function Radius() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Radius">
      <Label1 />
      <Container21 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">DATE</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex font-['Public_Sans:Regular',sans-serif] font-normal gap-px items-start leading-[0] px-px relative self-stretch shrink-0 text-[#082013] text-[18px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28px]">mm</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28px]">/</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28px]">dd</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28px]">/</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[28px]">yyyy</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[28px] items-start min-w-px overflow-clip relative" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Svg1() {
  return <div className="h-[16.875px] shrink-0 w-[18px]" data-name="SVG" />;
}

function ButtonMenu() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative shrink-0 size-[22px]" data-name="Button menu">
      <Svg1 />
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container25 />
        <ButtonMenu />
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[10px] pr-[12px] pt-[8px] relative size-full">
          <Container24 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(190,201,193,0.2)] border-b-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Date() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Date">
      <Label2 />
      <Input1 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">TIME WINDOW</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="SVG">
          <path d={svgPaths.p2fccf000} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.025" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#082013] text-[18px] w-full">
          <p className="leading-[28px]">Any Time</p>
        </div>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border-[rgba(190,201,193,0.2)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[10px] pr-[40px] pt-[8px] relative size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pb-[10.5px] pl-[203.67px] pr-[8px] pt-[8.5px] relative rounded-[inherit] size-full">
            <Svg2 />
          </div>
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bottom-[23.91%] content-stretch flex flex-col items-start right-[-0.01px] top-[23.91%]" data-name="Container">
      <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.4">
          <path d={svgPaths.p1adfde00} fill="var(--fill-0, #6F7A72)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Options1 />
      <Container28 />
    </div>
  );
}

function TimeWindow() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-3 self-start shrink-0" data-name="Time Window">
      <Label3 />
      <Container26 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#004d34] text-[14px] tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">COURSE TYPE</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="SVG">
          <path d={svgPaths.p2fccf000} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.025" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#082013] text-[18px] w-full">
          <p className="leading-[28px]">All Types</p>
        </div>
      </div>
    </div>
  );
}

function Options2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border-[rgba(190,201,193,0.2)] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[10px] pr-[40px] pt-[8px] relative size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pb-[10.5px] pl-[203.67px] pr-[8px] pt-[8.5px] relative rounded-[inherit] size-full">
            <Svg3 />
          </div>
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bottom-[23.91%] content-stretch flex flex-col items-start right-[-0.01px] top-[23.91%]" data-name="Container">
      <div className="h-[7.4px] relative shrink-0 w-[12px]" data-name="Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.4">
          <path d={svgPaths.p1adfde00} fill="var(--fill-0, #6F7A72)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Options2 />
      <Container31 />
    </div>
  );
}

function CourseType() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-3 self-start shrink-0" data-name="Course Type">
      <Label4 />
      <Container29 />
    </div>
  );
}

function FormGrid() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[____74px_74px_74px_84px] relative shrink-0 w-full" data-name="Form Grid">
      <ActionMargin />
      <Location />
      <Radius />
      <Date />
      <TimeWindow />
      <CourseType />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white relative rounded-[2px] shadow-[0px_40px_80px_-20px_rgba(8,32,19,0.06)] shrink-0 w-full" data-name="Background+Shadow">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[48px] pt-[32px] px-[32px] relative size-full">
          <FormHeader />
          <FormGrid />
        </div>
      </div>
    </div>
  );
}

function SearchFormColumnLeftAsymmetricalFocus() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[565.34px]" data-name="Search Form Column (Left, Asymmetrical Focus)">
      <BackgroundShadow />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute right-[-32px] size-[110px] top-[-32px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 110">
        <g id="Container" opacity="0.1">
          <path d={svgPaths.p2be27700} fill="var(--fill-0, #006747)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#004d34] text-[24px] tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[32px]">Murray, UT</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">LOCAL CONDITIONS</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#004d34] text-[48px] tracking-[-0.96px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[48px]">72°</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#082013] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Partly Cloudy</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3f4943] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Wind: SW 5mph</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-[89.14px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[16.01px] items-end pt-[20px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function CurrentWeatherCard() {
  return (
    <div className="bg-[#defbe4] relative rounded-[2px] shrink-0 w-full" data-name="Current Weather Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Noto_Serif:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#004d34] text-[20px] tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[28px]">Weekend Forecast</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#082013] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">FRI</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Container">
          <path d={svgPaths.p3db5e500} fill="var(--fill-0, #705D00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[16px] left-[56.21px] top-[7px] w-[23.8px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] right-0 text-[#3f4943] text-[14px] text-right top-[8px] whitespace-nowrap">
        <p className="leading-[20px]">52°</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[28px] relative shrink-0 w-[80px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] right-[31.68px] text-[#004d34] text-[18px] text-right top-[13.5px] whitespace-nowrap">
        <p className="leading-[28px]">75°</p>
      </div>
      <Container44 />
    </div>
  );
}

function Friday() {
  return (
    <div className="relative shrink-0 w-full" data-name="Friday">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.02px] relative size-full">
          <Container41 />
          <Container42 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#082013] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">SAT</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="Container">
          <path d={svgPaths.p326cf3c8} fill="var(--fill-0, #006747)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[16px] left-[55.58px] top-[7px] w-[24.42px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] right-0 text-[#3f4943] text-[14px] text-right top-[8px] whitespace-nowrap">
        <p className="leading-[20px]">55°</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[28px] relative shrink-0 w-[80px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] right-[32.31px] text-[#004d34] text-[18px] text-right top-[13.5px] whitespace-nowrap">
        <p className="leading-[28px]">78°</p>
      </div>
      <Container48 />
    </div>
  );
}

function Saturday() {
  return (
    <div className="relative shrink-0 w-full" data-name="Saturday">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.02px] relative size-full">
          <Container45 />
          <Container46 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Container">
      <div className="flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#082013] text-[14px] tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">SUN</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.pebcf900} fill="var(--fill-0, #6F7A72)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute h-[16px] left-[55.97px] top-[7px] w-[24.03px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:Regular',sans-serif] font-normal justify-center leading-[0] right-0 text-[#3f4943] text-[14px] text-right top-[8px] whitespace-nowrap">
        <p className="leading-[20px]">50°</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[28px] relative shrink-0 w-[80px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Public_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] right-[31.91px] text-[#004d34] text-[18px] text-right top-[13.5px] whitespace-nowrap">
        <p className="leading-[28px]">71°</p>
      </div>
      <Container52 />
    </div>
  );
}

function Sunday() {
  return (
    <div className="relative shrink-0 w-full" data-name="Sunday">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.02px] relative size-full">
          <Container49 />
          <Container50 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Friday />
      <Saturday />
      <Sunday />
    </div>
  );
}

function WeekendForecastCard() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 w-full" data-name="Weekend Forecast Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[2px] shadow-[0px_40px_80px_-20px_rgba(8,32,19,0.06)]" data-name="Weekend Forecast Card:shadow" />
        <Heading4 />
        <Container40 />
      </div>
    </div>
  );
}

function AuxiliaryColumnRight() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative self-stretch shrink-0 w-[282.66px]" data-name="Auxiliary Column (Right)">
      <CurrentWeatherCard />
      <WeekendForecastCard />
    </div>
  );
}

function ContentGrid() {
  return (
    <div className="absolute content-stretch flex gap-[48px] h-[654px] items-start left-0 max-w-[1280px] p-[48px] right-0 top-[320px]" data-name="Content Grid">
      <SearchFormColumnLeftAsymmetricalFocus />
      <AuxiliaryColumnRight />
    </div>
  );
}

function MainContentArea() {
  return (
    <div className="bg-[#e9ffed] flex-[1_0_0] h-full min-w-px relative z-[1]" data-name="Main Content Area">
      <HeroImageHeader />
      <ContentGrid />
      <div className="absolute bg-gradient-to-b from-[#e9ffed] h-[128px] left-0 right-0 to-[#defbe4] top-[974px]" data-name="Footer Spacing" />
    </div>
  );
}

function MainLayoutGrid() {
  return (
    <div className="content-stretch flex h-[1086px] isolate items-start overflow-clip relative shrink-0 w-full z-[1]" data-name="Main Layout Grid">
      <AsideSideNavBar />
      <MainContentArea />
    </div>
  );
}

export default function SearchHeritageEdition() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(233, 255, 237) 0%, rgb(233, 255, 237) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Search - Heritage Edition">
      <TopNavBar />
      <MainLayoutGrid />
    </div>
  );
}