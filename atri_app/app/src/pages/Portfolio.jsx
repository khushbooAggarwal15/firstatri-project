import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { UnorderedList } from "@atrilabs/react-component-manifests/src/manifests/UnorderedList/UnorderedList.tsx";
import { useFlex6Cb, useFlex4Cb, useDiv1Cb, useFlex5Cb, useFlex7Cb, useFlex8Cb, useFlex9Cb, useDiv2Cb, useFlex10Cb, useFlex11Cb, useDiv3Cb, useDiv4Cb, useDiv6Cb, useDiv5Cb, useDiv7Cb, useFlex13Cb, useDiv9Cb, useFlex14Cb, useFlex12Cb, useFlex19Cb, useFlex20Cb, useDiv14Cb, useDiv15Cb, useDiv16Cb, useFlex27Cb, useFlex28Cb, useDiv25Cb, useDiv26Cb, useFlex32Cb, useFlex33Cb, useDiv30Cb, useFlex31Cb, useDiv27Cb, useDiv28Cb, useDiv33Cb, useFlex35Cb, useFlex36Cb, useDiv34Cb, useFlex38Cb, useDiv38Cb, useFlex40Cb, useDiv36Cb, useFlex41Cb, useDiv37Cb, useDiv51Cb, useFlex51Cb, useDiv42Cb, useFlex42Cb, useDiv39Cb, useFlex43Cb, useDiv40Cb, useFlex44Cb, useDiv41Cb, useDiv50Cb, useFlex48Cb, useDiv47Cb, useFlex49Cb, useDiv48Cb, useFlex50Cb, useDiv49Cb, useDiv52Cb, useFlex52Cb, useFlex53Cb, useFlex54Cb, useDiv55Cb, useFlex57Cb, useDiv56Cb, useFlex58Cb, useDiv57Cb, useDiv58Cb, useDiv59Cb, useFlex94Cb, useFlex93Cb, useDiv74Cb, useDiv73Cb, useFlex92Cb, useDiv72Cb, useFlex91Cb, useDiv70Cb, useDiv71Cb, useFlex96Cb, useFlex95Cb, useFlex99Cb, useFlex100Cb, useDiv77Cb, useFlex101Cb, useFlex102Cb, useFlex103Cb, useFlex104Cb, useFlex105Cb, useDiv79Cb, useDiv80Cb, useDiv81Cb, useDiv82Cb, useFlex121Cb, useDiv104Cb, useDiv105Cb, useDiv106Cb, useDiv107Cb, useFlex128Cb, useFlex129Cb, useDiv115Cb, useFlex130Cb, useDiv116Cb, useDiv117Cb, useFlex131Cb, useDiv125Cb, useFlex139Cb, useDiv126Cb, useFlex140Cb, useDiv127Cb, useFlex141Cb, useDiv128Cb, useFlex142Cb, useFlex143Cb, useFlex23Cb, useFlex24Cb, useDiv18Cb, useDiv19Cb, useDiv20Cb, useFlex151Cb, useDiv136Cb, useFlex144Cb, useDiv130Cb, useDiv131Cb, useFlex145Cb, useFlex146Cb, useDiv133Cb, useDiv132Cb, useFlex147Cb, useFlex148Cb, useDiv135Cb, useDiv134Cb, useFlex149Cb, useFlex150Cb, useFlex153Cb, useDiv137Cb, useTextBox21Cb, useDiv8Cb, useCarousel1Cb, useDiv21Cb, useFlex29Cb, useFlex30Cb, useImage14Cb, useTextBox5Cb, useTextBox6Cb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useTextBox10Cb, useTextBox11Cb, useImage1Cb, useTextBox12Cb, useButton2Cb, useTextBox13Cb, useTextBox14Cb, useButton1Cb, useTextBox15Cb, useTextBox22Cb, useTextBox23Cb, useTextBox24Cb, useTextBox16Cb, useTextBox18Cb, useTextBox19Cb, useImage2Cb, useImage3Cb, useTextBox20Cb, useButton3Cb, useButton4Cb, useImage8Cb, useTextBox31Cb, useTextBox32Cb, useUnorderedList4Cb, useUnorderedList5Cb, useTextBox33Cb, useTextBox34Cb, useImage9Cb, useUnorderedList6Cb, useTextBox35Cb, useTextBox36Cb, useImage10Cb, useTextBox46Cb, useTextBox47Cb, useTextBox48Cb, useTextBox49Cb, useTextBox51Cb, useImage11Cb, useImage12Cb, useDiv29Cb, useFlex34Cb, useImage16Cb, useImage13Cb, useImage15Cb, useDiv31Cb, useTextBox52Cb, useTextBox53Cb, useTextBox54Cb, useTextBox55Cb, useTextBox56Cb, useTextBox59Cb, useTextBox60Cb, useImage19Cb, useTextBox58Cb, useTextBox72Cb, useTextBox64Cb, useTextBox65Cb, useImage17Cb, useTextBox66Cb, useTextBox71Cb, useTextBox67Cb, useTextBox68Cb, useImage18Cb, useTextBox69Cb, useTextBox70Cb, useTextBox57Cb, useImage29Cb, useTextBox85Cb, useTextBox79Cb, useTextBox80Cb, useImage21Cb, useTextBox73Cb, useTextBox74Cb, useTextBox81Cb, useTextBox82Cb, useImage20Cb, useTextBox75Cb, useTextBox76Cb, useTextBox83Cb, useTextBox84Cb, useImage22Cb, useTextBox77Cb, useTextBox78Cb, useImage23Cb, useTextBox105Cb, useTextBox106Cb, useImage28Cb, useTextBox99Cb, useTextBox100Cb, useImage24Cb, useTextBox107Cb, useTextBox108Cb, useImage26Cb, useTextBox101Cb, useTextBox102Cb, useImage25Cb, useTextBox109Cb, useTextBox110Cb, useImage27Cb, useTextBox103Cb, useTextBox104Cb, useTextBox111Cb, useImage30Cb, useDiv60Cb, useDiv69Cb, useTextBox117Cb, useImage34Cb, useImage35Cb, useTextBox118Cb, useTextBox119Cb, useTextBox120Cb, useButton9Cb, useButton12Cb, useTextBox115Cb, useDiv75Cb, useDiv76Cb, useTextBox156Cb, useTextBox166Cb, useTextBox169Cb, useTextBox182Cb, useTextBox155Cb, useImage58Cb, useImage57Cb, useButton13Cb, useButton14Cb, useTextBox152Cb, useTextBox153Cb, useImage60Cb, useTextBox157Cb, useTextBox154Cb, useImage59Cb, useImage63Cb, useTextBox160Cb, useImage64Cb, useTextBox161Cb, useImage65Cb, useTextBox162Cb, useImage66Cb, useTextBox163Cb, useImage67Cb, useTextBox164Cb, useImage68Cb, useTextBox165Cb, useTextBox168Cb, useTextBox170Cb, useTextBox171Cb, useTextBox172Cb, useTextBox173Cb, useTextBox174Cb, useTextBox175Cb, useTextBox176Cb, useTextBox177Cb, useTextBox178Cb, useTextBox179Cb, useTextBox180Cb, useTextBox181Cb, useTextBox251Cb, useTextBox239Cb, useTextBox240Cb, useTextBox241Cb, useTextBox242Cb, useTextBox243Cb, useTextBox244Cb, useTextBox245Cb, useTextBox246Cb, useTextBox247Cb, useTextBox248Cb, useTextBox249Cb, useTextBox250Cb, useTextBox266Cb, useTextBox267Cb, useTextBox268Cb, useImage79Cb, useTextBox270Cb, useTextBox271Cb, useImage80Cb, useTextBox269Cb, useTextBox294Cb, useTextBox295Cb, useTextBox293Cb, useImage88Cb, useTextBox297Cb, useTextBox298Cb, useTextBox296Cb, useImage89Cb, useTextBox300Cb, useTextBox301Cb, useTextBox299Cb, useImage90Cb, useTextBox303Cb, useTextBox304Cb, useTextBox302Cb, useImage91Cb, useTextBox37Cb, useTextBox38Cb, useTextBox39Cb, useTextBox40Cb, useButton5Cb, useButton6Cb, useCarousel2Cb, useTextBox307Cb, useTextBox308Cb, useImage93Cb, useTextBox306Cb, useImage94Cb, useCarousel5Cb, useTextBox310Cb, useTextBox311Cb, useImage95Cb, useTextBox309Cb, useImage96Cb, useCarousel6Cb, useTextBox313Cb, useTextBox314Cb, useImage97Cb, useTextBox312Cb, useImage98Cb, useButton19Cb, useButton20Cb } from "../page-cbs/portfolio";
import "../page-css/portfolio.css";
import "../custom/portfolio";

export default function Portfolio() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex6Props = useStore((state)=>state["portfolio"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["portfolio"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex4Props = useStore((state)=>state["portfolio"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["portfolio"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Div1Props = useStore((state)=>state["portfolio"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["portfolio"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Flex5Props = useStore((state)=>state["portfolio"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["portfolio"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex7Props = useStore((state)=>state["portfolio"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["portfolio"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex8Props = useStore((state)=>state["portfolio"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["portfolio"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Flex9Props = useStore((state)=>state["portfolio"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["portfolio"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Div2Props = useStore((state)=>state["portfolio"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["portfolio"]["Div2"]);
const Div2Cb = useDiv2Cb()
const Flex10Props = useStore((state)=>state["portfolio"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["portfolio"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex11Props = useStore((state)=>state["portfolio"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["portfolio"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Div3Props = useStore((state)=>state["portfolio"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["portfolio"]["Div3"]);
const Div3Cb = useDiv3Cb()
const Div4Props = useStore((state)=>state["portfolio"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["portfolio"]["Div4"]);
const Div4Cb = useDiv4Cb()
const Div6Props = useStore((state)=>state["portfolio"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["portfolio"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Div5Props = useStore((state)=>state["portfolio"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["portfolio"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Div7Props = useStore((state)=>state["portfolio"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["portfolio"]["Div7"]);
const Div7Cb = useDiv7Cb()
const Flex13Props = useStore((state)=>state["portfolio"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["portfolio"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Div9Props = useStore((state)=>state["portfolio"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["portfolio"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Flex14Props = useStore((state)=>state["portfolio"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["portfolio"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex12Props = useStore((state)=>state["portfolio"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["portfolio"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex19Props = useStore((state)=>state["portfolio"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["portfolio"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex20Props = useStore((state)=>state["portfolio"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["portfolio"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Div14Props = useStore((state)=>state["portfolio"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["portfolio"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Div15Props = useStore((state)=>state["portfolio"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["portfolio"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div16Props = useStore((state)=>state["portfolio"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["portfolio"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Flex27Props = useStore((state)=>state["portfolio"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["portfolio"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex28Props = useStore((state)=>state["portfolio"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["portfolio"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Div25Props = useStore((state)=>state["portfolio"]["Div25"]);
const Div25IoProps = useIoStore((state)=>state["portfolio"]["Div25"]);
const Div25Cb = useDiv25Cb()
const Div26Props = useStore((state)=>state["portfolio"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["portfolio"]["Div26"]);
const Div26Cb = useDiv26Cb()
const Flex32Props = useStore((state)=>state["portfolio"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["portfolio"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex33Props = useStore((state)=>state["portfolio"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["portfolio"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Div30Props = useStore((state)=>state["portfolio"]["Div30"]);
const Div30IoProps = useIoStore((state)=>state["portfolio"]["Div30"]);
const Div30Cb = useDiv30Cb()
const Flex31Props = useStore((state)=>state["portfolio"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["portfolio"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Div27Props = useStore((state)=>state["portfolio"]["Div27"]);
const Div27IoProps = useIoStore((state)=>state["portfolio"]["Div27"]);
const Div27Cb = useDiv27Cb()
const Div28Props = useStore((state)=>state["portfolio"]["Div28"]);
const Div28IoProps = useIoStore((state)=>state["portfolio"]["Div28"]);
const Div28Cb = useDiv28Cb()
const Div33Props = useStore((state)=>state["portfolio"]["Div33"]);
const Div33IoProps = useIoStore((state)=>state["portfolio"]["Div33"]);
const Div33Cb = useDiv33Cb()
const Flex35Props = useStore((state)=>state["portfolio"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["portfolio"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["portfolio"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["portfolio"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Div34Props = useStore((state)=>state["portfolio"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["portfolio"]["Div34"]);
const Div34Cb = useDiv34Cb()
const Flex38Props = useStore((state)=>state["portfolio"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["portfolio"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Div38Props = useStore((state)=>state["portfolio"]["Div38"]);
const Div38IoProps = useIoStore((state)=>state["portfolio"]["Div38"]);
const Div38Cb = useDiv38Cb()
const Flex40Props = useStore((state)=>state["portfolio"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["portfolio"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Div36Props = useStore((state)=>state["portfolio"]["Div36"]);
const Div36IoProps = useIoStore((state)=>state["portfolio"]["Div36"]);
const Div36Cb = useDiv36Cb()
const Flex41Props = useStore((state)=>state["portfolio"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["portfolio"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Div37Props = useStore((state)=>state["portfolio"]["Div37"]);
const Div37IoProps = useIoStore((state)=>state["portfolio"]["Div37"]);
const Div37Cb = useDiv37Cb()
const Div51Props = useStore((state)=>state["portfolio"]["Div51"]);
const Div51IoProps = useIoStore((state)=>state["portfolio"]["Div51"]);
const Div51Cb = useDiv51Cb()
const Flex51Props = useStore((state)=>state["portfolio"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["portfolio"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Div42Props = useStore((state)=>state["portfolio"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["portfolio"]["Div42"]);
const Div42Cb = useDiv42Cb()
const Flex42Props = useStore((state)=>state["portfolio"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["portfolio"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Div39Props = useStore((state)=>state["portfolio"]["Div39"]);
const Div39IoProps = useIoStore((state)=>state["portfolio"]["Div39"]);
const Div39Cb = useDiv39Cb()
const Flex43Props = useStore((state)=>state["portfolio"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["portfolio"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Div40Props = useStore((state)=>state["portfolio"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["portfolio"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Flex44Props = useStore((state)=>state["portfolio"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["portfolio"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Div41Props = useStore((state)=>state["portfolio"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["portfolio"]["Div41"]);
const Div41Cb = useDiv41Cb()
const Div50Props = useStore((state)=>state["portfolio"]["Div50"]);
const Div50IoProps = useIoStore((state)=>state["portfolio"]["Div50"]);
const Div50Cb = useDiv50Cb()
const Flex48Props = useStore((state)=>state["portfolio"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["portfolio"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Div47Props = useStore((state)=>state["portfolio"]["Div47"]);
const Div47IoProps = useIoStore((state)=>state["portfolio"]["Div47"]);
const Div47Cb = useDiv47Cb()
const Flex49Props = useStore((state)=>state["portfolio"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["portfolio"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Div48Props = useStore((state)=>state["portfolio"]["Div48"]);
const Div48IoProps = useIoStore((state)=>state["portfolio"]["Div48"]);
const Div48Cb = useDiv48Cb()
const Flex50Props = useStore((state)=>state["portfolio"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["portfolio"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Div49Props = useStore((state)=>state["portfolio"]["Div49"]);
const Div49IoProps = useIoStore((state)=>state["portfolio"]["Div49"]);
const Div49Cb = useDiv49Cb()
const Div52Props = useStore((state)=>state["portfolio"]["Div52"]);
const Div52IoProps = useIoStore((state)=>state["portfolio"]["Div52"]);
const Div52Cb = useDiv52Cb()
const Flex52Props = useStore((state)=>state["portfolio"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["portfolio"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex53Props = useStore((state)=>state["portfolio"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["portfolio"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex54Props = useStore((state)=>state["portfolio"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["portfolio"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Div55Props = useStore((state)=>state["portfolio"]["Div55"]);
const Div55IoProps = useIoStore((state)=>state["portfolio"]["Div55"]);
const Div55Cb = useDiv55Cb()
const Flex57Props = useStore((state)=>state["portfolio"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["portfolio"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Div56Props = useStore((state)=>state["portfolio"]["Div56"]);
const Div56IoProps = useIoStore((state)=>state["portfolio"]["Div56"]);
const Div56Cb = useDiv56Cb()
const Flex58Props = useStore((state)=>state["portfolio"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["portfolio"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Div57Props = useStore((state)=>state["portfolio"]["Div57"]);
const Div57IoProps = useIoStore((state)=>state["portfolio"]["Div57"]);
const Div57Cb = useDiv57Cb()
const Div58Props = useStore((state)=>state["portfolio"]["Div58"]);
const Div58IoProps = useIoStore((state)=>state["portfolio"]["Div58"]);
const Div58Cb = useDiv58Cb()
const Div59Props = useStore((state)=>state["portfolio"]["Div59"]);
const Div59IoProps = useIoStore((state)=>state["portfolio"]["Div59"]);
const Div59Cb = useDiv59Cb()
const Flex94Props = useStore((state)=>state["portfolio"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["portfolio"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex93Props = useStore((state)=>state["portfolio"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["portfolio"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Div74Props = useStore((state)=>state["portfolio"]["Div74"]);
const Div74IoProps = useIoStore((state)=>state["portfolio"]["Div74"]);
const Div74Cb = useDiv74Cb()
const Div73Props = useStore((state)=>state["portfolio"]["Div73"]);
const Div73IoProps = useIoStore((state)=>state["portfolio"]["Div73"]);
const Div73Cb = useDiv73Cb()
const Flex92Props = useStore((state)=>state["portfolio"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["portfolio"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Div72Props = useStore((state)=>state["portfolio"]["Div72"]);
const Div72IoProps = useIoStore((state)=>state["portfolio"]["Div72"]);
const Div72Cb = useDiv72Cb()
const Flex91Props = useStore((state)=>state["portfolio"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["portfolio"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Div70Props = useStore((state)=>state["portfolio"]["Div70"]);
const Div70IoProps = useIoStore((state)=>state["portfolio"]["Div70"]);
const Div70Cb = useDiv70Cb()
const Div71Props = useStore((state)=>state["portfolio"]["Div71"]);
const Div71IoProps = useIoStore((state)=>state["portfolio"]["Div71"]);
const Div71Cb = useDiv71Cb()
const Flex96Props = useStore((state)=>state["portfolio"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["portfolio"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex95Props = useStore((state)=>state["portfolio"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["portfolio"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex99Props = useStore((state)=>state["portfolio"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["portfolio"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex100Props = useStore((state)=>state["portfolio"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["portfolio"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Div77Props = useStore((state)=>state["portfolio"]["Div77"]);
const Div77IoProps = useIoStore((state)=>state["portfolio"]["Div77"]);
const Div77Cb = useDiv77Cb()
const Flex101Props = useStore((state)=>state["portfolio"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["portfolio"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex102Props = useStore((state)=>state["portfolio"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["portfolio"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex103Props = useStore((state)=>state["portfolio"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["portfolio"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex104Props = useStore((state)=>state["portfolio"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["portfolio"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex105Props = useStore((state)=>state["portfolio"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["portfolio"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Div79Props = useStore((state)=>state["portfolio"]["Div79"]);
const Div79IoProps = useIoStore((state)=>state["portfolio"]["Div79"]);
const Div79Cb = useDiv79Cb()
const Div80Props = useStore((state)=>state["portfolio"]["Div80"]);
const Div80IoProps = useIoStore((state)=>state["portfolio"]["Div80"]);
const Div80Cb = useDiv80Cb()
const Div81Props = useStore((state)=>state["portfolio"]["Div81"]);
const Div81IoProps = useIoStore((state)=>state["portfolio"]["Div81"]);
const Div81Cb = useDiv81Cb()
const Div82Props = useStore((state)=>state["portfolio"]["Div82"]);
const Div82IoProps = useIoStore((state)=>state["portfolio"]["Div82"]);
const Div82Cb = useDiv82Cb()
const Flex121Props = useStore((state)=>state["portfolio"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["portfolio"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Div104Props = useStore((state)=>state["portfolio"]["Div104"]);
const Div104IoProps = useIoStore((state)=>state["portfolio"]["Div104"]);
const Div104Cb = useDiv104Cb()
const Div105Props = useStore((state)=>state["portfolio"]["Div105"]);
const Div105IoProps = useIoStore((state)=>state["portfolio"]["Div105"]);
const Div105Cb = useDiv105Cb()
const Div106Props = useStore((state)=>state["portfolio"]["Div106"]);
const Div106IoProps = useIoStore((state)=>state["portfolio"]["Div106"]);
const Div106Cb = useDiv106Cb()
const Div107Props = useStore((state)=>state["portfolio"]["Div107"]);
const Div107IoProps = useIoStore((state)=>state["portfolio"]["Div107"]);
const Div107Cb = useDiv107Cb()
const Flex128Props = useStore((state)=>state["portfolio"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["portfolio"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex129Props = useStore((state)=>state["portfolio"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["portfolio"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Div115Props = useStore((state)=>state["portfolio"]["Div115"]);
const Div115IoProps = useIoStore((state)=>state["portfolio"]["Div115"]);
const Div115Cb = useDiv115Cb()
const Flex130Props = useStore((state)=>state["portfolio"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["portfolio"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Div116Props = useStore((state)=>state["portfolio"]["Div116"]);
const Div116IoProps = useIoStore((state)=>state["portfolio"]["Div116"]);
const Div116Cb = useDiv116Cb()
const Div117Props = useStore((state)=>state["portfolio"]["Div117"]);
const Div117IoProps = useIoStore((state)=>state["portfolio"]["Div117"]);
const Div117Cb = useDiv117Cb()
const Flex131Props = useStore((state)=>state["portfolio"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["portfolio"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Div125Props = useStore((state)=>state["portfolio"]["Div125"]);
const Div125IoProps = useIoStore((state)=>state["portfolio"]["Div125"]);
const Div125Cb = useDiv125Cb()
const Flex139Props = useStore((state)=>state["portfolio"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["portfolio"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Div126Props = useStore((state)=>state["portfolio"]["Div126"]);
const Div126IoProps = useIoStore((state)=>state["portfolio"]["Div126"]);
const Div126Cb = useDiv126Cb()
const Flex140Props = useStore((state)=>state["portfolio"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["portfolio"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Div127Props = useStore((state)=>state["portfolio"]["Div127"]);
const Div127IoProps = useIoStore((state)=>state["portfolio"]["Div127"]);
const Div127Cb = useDiv127Cb()
const Flex141Props = useStore((state)=>state["portfolio"]["Flex141"]);
const Flex141IoProps = useIoStore((state)=>state["portfolio"]["Flex141"]);
const Flex141Cb = useFlex141Cb()
const Div128Props = useStore((state)=>state["portfolio"]["Div128"]);
const Div128IoProps = useIoStore((state)=>state["portfolio"]["Div128"]);
const Div128Cb = useDiv128Cb()
const Flex142Props = useStore((state)=>state["portfolio"]["Flex142"]);
const Flex142IoProps = useIoStore((state)=>state["portfolio"]["Flex142"]);
const Flex142Cb = useFlex142Cb()
const Flex143Props = useStore((state)=>state["portfolio"]["Flex143"]);
const Flex143IoProps = useIoStore((state)=>state["portfolio"]["Flex143"]);
const Flex143Cb = useFlex143Cb()
const Flex23Props = useStore((state)=>state["portfolio"]["Flex23"]);
const Flex23IoProps = useIoStore((state)=>state["portfolio"]["Flex23"]);
const Flex23Cb = useFlex23Cb()
const Flex24Props = useStore((state)=>state["portfolio"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["portfolio"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Div18Props = useStore((state)=>state["portfolio"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["portfolio"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Div19Props = useStore((state)=>state["portfolio"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["portfolio"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Div20Props = useStore((state)=>state["portfolio"]["Div20"]);
const Div20IoProps = useIoStore((state)=>state["portfolio"]["Div20"]);
const Div20Cb = useDiv20Cb()
const Flex151Props = useStore((state)=>state["portfolio"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["portfolio"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const Div136Props = useStore((state)=>state["portfolio"]["Div136"]);
const Div136IoProps = useIoStore((state)=>state["portfolio"]["Div136"]);
const Div136Cb = useDiv136Cb()
const Flex144Props = useStore((state)=>state["portfolio"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["portfolio"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Div130Props = useStore((state)=>state["portfolio"]["Div130"]);
const Div130IoProps = useIoStore((state)=>state["portfolio"]["Div130"]);
const Div130Cb = useDiv130Cb()
const Div131Props = useStore((state)=>state["portfolio"]["Div131"]);
const Div131IoProps = useIoStore((state)=>state["portfolio"]["Div131"]);
const Div131Cb = useDiv131Cb()
const Flex145Props = useStore((state)=>state["portfolio"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["portfolio"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Flex146Props = useStore((state)=>state["portfolio"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["portfolio"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Div133Props = useStore((state)=>state["portfolio"]["Div133"]);
const Div133IoProps = useIoStore((state)=>state["portfolio"]["Div133"]);
const Div133Cb = useDiv133Cb()
const Div132Props = useStore((state)=>state["portfolio"]["Div132"]);
const Div132IoProps = useIoStore((state)=>state["portfolio"]["Div132"]);
const Div132Cb = useDiv132Cb()
const Flex147Props = useStore((state)=>state["portfolio"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["portfolio"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Flex148Props = useStore((state)=>state["portfolio"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["portfolio"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Div135Props = useStore((state)=>state["portfolio"]["Div135"]);
const Div135IoProps = useIoStore((state)=>state["portfolio"]["Div135"]);
const Div135Cb = useDiv135Cb()
const Div134Props = useStore((state)=>state["portfolio"]["Div134"]);
const Div134IoProps = useIoStore((state)=>state["portfolio"]["Div134"]);
const Div134Cb = useDiv134Cb()
const Flex149Props = useStore((state)=>state["portfolio"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["portfolio"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex150Props = useStore((state)=>state["portfolio"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["portfolio"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Flex153Props = useStore((state)=>state["portfolio"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["portfolio"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Div137Props = useStore((state)=>state["portfolio"]["Div137"]);
const Div137IoProps = useIoStore((state)=>state["portfolio"]["Div137"]);
const Div137Cb = useDiv137Cb()
const TextBox21Props = useStore((state)=>state["portfolio"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["portfolio"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const Div8Props = useStore((state)=>state["portfolio"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["portfolio"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Carousel1Props = useStore((state)=>state["portfolio"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["portfolio"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const Div21Props = useStore((state)=>state["portfolio"]["Div21"]);
const Div21IoProps = useIoStore((state)=>state["portfolio"]["Div21"]);
const Div21Cb = useDiv21Cb()
const Flex29Props = useStore((state)=>state["portfolio"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["portfolio"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex30Props = useStore((state)=>state["portfolio"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["portfolio"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Image14Props = useStore((state)=>state["portfolio"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["portfolio"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox5Props = useStore((state)=>state["portfolio"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["portfolio"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const TextBox6Props = useStore((state)=>state["portfolio"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["portfolio"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["portfolio"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["portfolio"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["portfolio"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["portfolio"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["portfolio"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["portfolio"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["portfolio"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["portfolio"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["portfolio"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["portfolio"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Image1Props = useStore((state)=>state["portfolio"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["portfolio"]["Image1"]);
const Image1Cb = useImage1Cb()
const TextBox12Props = useStore((state)=>state["portfolio"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["portfolio"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Button2Props = useStore((state)=>state["portfolio"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["portfolio"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox13Props = useStore((state)=>state["portfolio"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["portfolio"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["portfolio"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["portfolio"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Button1Props = useStore((state)=>state["portfolio"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["portfolio"]["Button1"]);
const Button1Cb = useButton1Cb()
const TextBox15Props = useStore((state)=>state["portfolio"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["portfolio"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox22Props = useStore((state)=>state["portfolio"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["portfolio"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["portfolio"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["portfolio"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["portfolio"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["portfolio"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox16Props = useStore((state)=>state["portfolio"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["portfolio"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const TextBox18Props = useStore((state)=>state["portfolio"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["portfolio"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox19Props = useStore((state)=>state["portfolio"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["portfolio"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const Image2Props = useStore((state)=>state["portfolio"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["portfolio"]["Image2"]);
const Image2Cb = useImage2Cb()
const Image3Props = useStore((state)=>state["portfolio"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["portfolio"]["Image3"]);
const Image3Cb = useImage3Cb()
const TextBox20Props = useStore((state)=>state["portfolio"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["portfolio"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Button3Props = useStore((state)=>state["portfolio"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["portfolio"]["Button3"]);
const Button3Cb = useButton3Cb()
const Button4Props = useStore((state)=>state["portfolio"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["portfolio"]["Button4"]);
const Button4Cb = useButton4Cb()
const Image8Props = useStore((state)=>state["portfolio"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["portfolio"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox31Props = useStore((state)=>state["portfolio"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["portfolio"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["portfolio"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["portfolio"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const UnorderedList4Props = useStore((state)=>state["portfolio"]["UnorderedList4"]);
const UnorderedList4IoProps = useIoStore((state)=>state["portfolio"]["UnorderedList4"]);
const UnorderedList4Cb = useUnorderedList4Cb()
const UnorderedList5Props = useStore((state)=>state["portfolio"]["UnorderedList5"]);
const UnorderedList5IoProps = useIoStore((state)=>state["portfolio"]["UnorderedList5"]);
const UnorderedList5Cb = useUnorderedList5Cb()
const TextBox33Props = useStore((state)=>state["portfolio"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["portfolio"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["portfolio"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["portfolio"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const Image9Props = useStore((state)=>state["portfolio"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["portfolio"]["Image9"]);
const Image9Cb = useImage9Cb()
const UnorderedList6Props = useStore((state)=>state["portfolio"]["UnorderedList6"]);
const UnorderedList6IoProps = useIoStore((state)=>state["portfolio"]["UnorderedList6"]);
const UnorderedList6Cb = useUnorderedList6Cb()
const TextBox35Props = useStore((state)=>state["portfolio"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["portfolio"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox36Props = useStore((state)=>state["portfolio"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["portfolio"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Image10Props = useStore((state)=>state["portfolio"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["portfolio"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox46Props = useStore((state)=>state["portfolio"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["portfolio"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["portfolio"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["portfolio"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["portfolio"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["portfolio"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["portfolio"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["portfolio"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox51Props = useStore((state)=>state["portfolio"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["portfolio"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const Image11Props = useStore((state)=>state["portfolio"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["portfolio"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image12Props = useStore((state)=>state["portfolio"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["portfolio"]["Image12"]);
const Image12Cb = useImage12Cb()
const Div29Props = useStore((state)=>state["portfolio"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["portfolio"]["Div29"]);
const Div29Cb = useDiv29Cb()
const Flex34Props = useStore((state)=>state["portfolio"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["portfolio"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Image16Props = useStore((state)=>state["portfolio"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["portfolio"]["Image16"]);
const Image16Cb = useImage16Cb()
const Image13Props = useStore((state)=>state["portfolio"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["portfolio"]["Image13"]);
const Image13Cb = useImage13Cb()
const Image15Props = useStore((state)=>state["portfolio"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["portfolio"]["Image15"]);
const Image15Cb = useImage15Cb()
const Div31Props = useStore((state)=>state["portfolio"]["Div31"]);
const Div31IoProps = useIoStore((state)=>state["portfolio"]["Div31"]);
const Div31Cb = useDiv31Cb()
const TextBox52Props = useStore((state)=>state["portfolio"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["portfolio"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["portfolio"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["portfolio"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["portfolio"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["portfolio"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["portfolio"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["portfolio"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["portfolio"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["portfolio"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox59Props = useStore((state)=>state["portfolio"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["portfolio"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["portfolio"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["portfolio"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const Image19Props = useStore((state)=>state["portfolio"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["portfolio"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox58Props = useStore((state)=>state["portfolio"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["portfolio"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox72Props = useStore((state)=>state["portfolio"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["portfolio"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox64Props = useStore((state)=>state["portfolio"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["portfolio"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["portfolio"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["portfolio"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Image17Props = useStore((state)=>state["portfolio"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["portfolio"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox66Props = useStore((state)=>state["portfolio"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["portfolio"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox71Props = useStore((state)=>state["portfolio"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["portfolio"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox67Props = useStore((state)=>state["portfolio"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["portfolio"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["portfolio"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["portfolio"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const Image18Props = useStore((state)=>state["portfolio"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["portfolio"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox69Props = useStore((state)=>state["portfolio"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["portfolio"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox70Props = useStore((state)=>state["portfolio"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["portfolio"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox57Props = useStore((state)=>state["portfolio"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["portfolio"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Image29Props = useStore((state)=>state["portfolio"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["portfolio"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox85Props = useStore((state)=>state["portfolio"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["portfolio"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox79Props = useStore((state)=>state["portfolio"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["portfolio"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const TextBox80Props = useStore((state)=>state["portfolio"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["portfolio"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const Image21Props = useStore((state)=>state["portfolio"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["portfolio"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox73Props = useStore((state)=>state["portfolio"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["portfolio"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["portfolio"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["portfolio"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox81Props = useStore((state)=>state["portfolio"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["portfolio"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const TextBox82Props = useStore((state)=>state["portfolio"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["portfolio"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const Image20Props = useStore((state)=>state["portfolio"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["portfolio"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox75Props = useStore((state)=>state["portfolio"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["portfolio"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["portfolio"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["portfolio"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox83Props = useStore((state)=>state["portfolio"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["portfolio"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const TextBox84Props = useStore((state)=>state["portfolio"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["portfolio"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const Image22Props = useStore((state)=>state["portfolio"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["portfolio"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox77Props = useStore((state)=>state["portfolio"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["portfolio"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["portfolio"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["portfolio"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const Image23Props = useStore((state)=>state["portfolio"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["portfolio"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox105Props = useStore((state)=>state["portfolio"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["portfolio"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["portfolio"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["portfolio"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const Image28Props = useStore((state)=>state["portfolio"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["portfolio"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox99Props = useStore((state)=>state["portfolio"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["portfolio"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["portfolio"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["portfolio"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const Image24Props = useStore((state)=>state["portfolio"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["portfolio"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox107Props = useStore((state)=>state["portfolio"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["portfolio"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const TextBox108Props = useStore((state)=>state["portfolio"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["portfolio"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const Image26Props = useStore((state)=>state["portfolio"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["portfolio"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox101Props = useStore((state)=>state["portfolio"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["portfolio"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["portfolio"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["portfolio"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const Image25Props = useStore((state)=>state["portfolio"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["portfolio"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox109Props = useStore((state)=>state["portfolio"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["portfolio"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["portfolio"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["portfolio"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Image27Props = useStore((state)=>state["portfolio"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["portfolio"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox103Props = useStore((state)=>state["portfolio"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["portfolio"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["portfolio"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["portfolio"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox111Props = useStore((state)=>state["portfolio"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["portfolio"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const Image30Props = useStore((state)=>state["portfolio"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["portfolio"]["Image30"]);
const Image30Cb = useImage30Cb()
const Div60Props = useStore((state)=>state["portfolio"]["Div60"]);
const Div60IoProps = useIoStore((state)=>state["portfolio"]["Div60"]);
const Div60Cb = useDiv60Cb()
const Div69Props = useStore((state)=>state["portfolio"]["Div69"]);
const Div69IoProps = useIoStore((state)=>state["portfolio"]["Div69"]);
const Div69Cb = useDiv69Cb()
const TextBox117Props = useStore((state)=>state["portfolio"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["portfolio"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const Image34Props = useStore((state)=>state["portfolio"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["portfolio"]["Image34"]);
const Image34Cb = useImage34Cb()
const Image35Props = useStore((state)=>state["portfolio"]["Image35"]);
const Image35IoProps = useIoStore((state)=>state["portfolio"]["Image35"]);
const Image35Cb = useImage35Cb()
const TextBox118Props = useStore((state)=>state["portfolio"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["portfolio"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox119Props = useStore((state)=>state["portfolio"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["portfolio"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox120Props = useStore((state)=>state["portfolio"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["portfolio"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const Button9Props = useStore((state)=>state["portfolio"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["portfolio"]["Button9"]);
const Button9Cb = useButton9Cb()
const Button12Props = useStore((state)=>state["portfolio"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["portfolio"]["Button12"]);
const Button12Cb = useButton12Cb()
const TextBox115Props = useStore((state)=>state["portfolio"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["portfolio"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const Div75Props = useStore((state)=>state["portfolio"]["Div75"]);
const Div75IoProps = useIoStore((state)=>state["portfolio"]["Div75"]);
const Div75Cb = useDiv75Cb()
const Div76Props = useStore((state)=>state["portfolio"]["Div76"]);
const Div76IoProps = useIoStore((state)=>state["portfolio"]["Div76"]);
const Div76Cb = useDiv76Cb()
const TextBox156Props = useStore((state)=>state["portfolio"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["portfolio"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox166Props = useStore((state)=>state["portfolio"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["portfolio"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox169Props = useStore((state)=>state["portfolio"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["portfolio"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox182Props = useStore((state)=>state["portfolio"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["portfolio"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox155Props = useStore((state)=>state["portfolio"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["portfolio"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const Image58Props = useStore((state)=>state["portfolio"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["portfolio"]["Image58"]);
const Image58Cb = useImage58Cb()
const Image57Props = useStore((state)=>state["portfolio"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["portfolio"]["Image57"]);
const Image57Cb = useImage57Cb()
const Button13Props = useStore((state)=>state["portfolio"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["portfolio"]["Button13"]);
const Button13Cb = useButton13Cb()
const Button14Props = useStore((state)=>state["portfolio"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["portfolio"]["Button14"]);
const Button14Cb = useButton14Cb()
const TextBox152Props = useStore((state)=>state["portfolio"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["portfolio"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const TextBox153Props = useStore((state)=>state["portfolio"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["portfolio"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const Image60Props = useStore((state)=>state["portfolio"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["portfolio"]["Image60"]);
const Image60Cb = useImage60Cb()
const TextBox157Props = useStore((state)=>state["portfolio"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["portfolio"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox154Props = useStore((state)=>state["portfolio"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["portfolio"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const Image59Props = useStore((state)=>state["portfolio"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["portfolio"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image63Props = useStore((state)=>state["portfolio"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["portfolio"]["Image63"]);
const Image63Cb = useImage63Cb()
const TextBox160Props = useStore((state)=>state["portfolio"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["portfolio"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const Image64Props = useStore((state)=>state["portfolio"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["portfolio"]["Image64"]);
const Image64Cb = useImage64Cb()
const TextBox161Props = useStore((state)=>state["portfolio"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["portfolio"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const Image65Props = useStore((state)=>state["portfolio"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["portfolio"]["Image65"]);
const Image65Cb = useImage65Cb()
const TextBox162Props = useStore((state)=>state["portfolio"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["portfolio"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const Image66Props = useStore((state)=>state["portfolio"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["portfolio"]["Image66"]);
const Image66Cb = useImage66Cb()
const TextBox163Props = useStore((state)=>state["portfolio"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["portfolio"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Image67Props = useStore((state)=>state["portfolio"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["portfolio"]["Image67"]);
const Image67Cb = useImage67Cb()
const TextBox164Props = useStore((state)=>state["portfolio"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["portfolio"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const Image68Props = useStore((state)=>state["portfolio"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["portfolio"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox165Props = useStore((state)=>state["portfolio"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["portfolio"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox168Props = useStore((state)=>state["portfolio"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["portfolio"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox170Props = useStore((state)=>state["portfolio"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["portfolio"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["portfolio"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["portfolio"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["portfolio"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["portfolio"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["portfolio"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["portfolio"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox174Props = useStore((state)=>state["portfolio"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["portfolio"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox175Props = useStore((state)=>state["portfolio"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["portfolio"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox176Props = useStore((state)=>state["portfolio"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["portfolio"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["portfolio"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["portfolio"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const TextBox178Props = useStore((state)=>state["portfolio"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["portfolio"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["portfolio"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["portfolio"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox180Props = useStore((state)=>state["portfolio"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["portfolio"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox181Props = useStore((state)=>state["portfolio"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["portfolio"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox251Props = useStore((state)=>state["portfolio"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["portfolio"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const TextBox239Props = useStore((state)=>state["portfolio"]["TextBox239"]);
const TextBox239IoProps = useIoStore((state)=>state["portfolio"]["TextBox239"]);
const TextBox239Cb = useTextBox239Cb()
const TextBox240Props = useStore((state)=>state["portfolio"]["TextBox240"]);
const TextBox240IoProps = useIoStore((state)=>state["portfolio"]["TextBox240"]);
const TextBox240Cb = useTextBox240Cb()
const TextBox241Props = useStore((state)=>state["portfolio"]["TextBox241"]);
const TextBox241IoProps = useIoStore((state)=>state["portfolio"]["TextBox241"]);
const TextBox241Cb = useTextBox241Cb()
const TextBox242Props = useStore((state)=>state["portfolio"]["TextBox242"]);
const TextBox242IoProps = useIoStore((state)=>state["portfolio"]["TextBox242"]);
const TextBox242Cb = useTextBox242Cb()
const TextBox243Props = useStore((state)=>state["portfolio"]["TextBox243"]);
const TextBox243IoProps = useIoStore((state)=>state["portfolio"]["TextBox243"]);
const TextBox243Cb = useTextBox243Cb()
const TextBox244Props = useStore((state)=>state["portfolio"]["TextBox244"]);
const TextBox244IoProps = useIoStore((state)=>state["portfolio"]["TextBox244"]);
const TextBox244Cb = useTextBox244Cb()
const TextBox245Props = useStore((state)=>state["portfolio"]["TextBox245"]);
const TextBox245IoProps = useIoStore((state)=>state["portfolio"]["TextBox245"]);
const TextBox245Cb = useTextBox245Cb()
const TextBox246Props = useStore((state)=>state["portfolio"]["TextBox246"]);
const TextBox246IoProps = useIoStore((state)=>state["portfolio"]["TextBox246"]);
const TextBox246Cb = useTextBox246Cb()
const TextBox247Props = useStore((state)=>state["portfolio"]["TextBox247"]);
const TextBox247IoProps = useIoStore((state)=>state["portfolio"]["TextBox247"]);
const TextBox247Cb = useTextBox247Cb()
const TextBox248Props = useStore((state)=>state["portfolio"]["TextBox248"]);
const TextBox248IoProps = useIoStore((state)=>state["portfolio"]["TextBox248"]);
const TextBox248Cb = useTextBox248Cb()
const TextBox249Props = useStore((state)=>state["portfolio"]["TextBox249"]);
const TextBox249IoProps = useIoStore((state)=>state["portfolio"]["TextBox249"]);
const TextBox249Cb = useTextBox249Cb()
const TextBox250Props = useStore((state)=>state["portfolio"]["TextBox250"]);
const TextBox250IoProps = useIoStore((state)=>state["portfolio"]["TextBox250"]);
const TextBox250Cb = useTextBox250Cb()
const TextBox266Props = useStore((state)=>state["portfolio"]["TextBox266"]);
const TextBox266IoProps = useIoStore((state)=>state["portfolio"]["TextBox266"]);
const TextBox266Cb = useTextBox266Cb()
const TextBox267Props = useStore((state)=>state["portfolio"]["TextBox267"]);
const TextBox267IoProps = useIoStore((state)=>state["portfolio"]["TextBox267"]);
const TextBox267Cb = useTextBox267Cb()
const TextBox268Props = useStore((state)=>state["portfolio"]["TextBox268"]);
const TextBox268IoProps = useIoStore((state)=>state["portfolio"]["TextBox268"]);
const TextBox268Cb = useTextBox268Cb()
const Image79Props = useStore((state)=>state["portfolio"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["portfolio"]["Image79"]);
const Image79Cb = useImage79Cb()
const TextBox270Props = useStore((state)=>state["portfolio"]["TextBox270"]);
const TextBox270IoProps = useIoStore((state)=>state["portfolio"]["TextBox270"]);
const TextBox270Cb = useTextBox270Cb()
const TextBox271Props = useStore((state)=>state["portfolio"]["TextBox271"]);
const TextBox271IoProps = useIoStore((state)=>state["portfolio"]["TextBox271"]);
const TextBox271Cb = useTextBox271Cb()
const Image80Props = useStore((state)=>state["portfolio"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["portfolio"]["Image80"]);
const Image80Cb = useImage80Cb()
const TextBox269Props = useStore((state)=>state["portfolio"]["TextBox269"]);
const TextBox269IoProps = useIoStore((state)=>state["portfolio"]["TextBox269"]);
const TextBox269Cb = useTextBox269Cb()
const TextBox294Props = useStore((state)=>state["portfolio"]["TextBox294"]);
const TextBox294IoProps = useIoStore((state)=>state["portfolio"]["TextBox294"]);
const TextBox294Cb = useTextBox294Cb()
const TextBox295Props = useStore((state)=>state["portfolio"]["TextBox295"]);
const TextBox295IoProps = useIoStore((state)=>state["portfolio"]["TextBox295"]);
const TextBox295Cb = useTextBox295Cb()
const TextBox293Props = useStore((state)=>state["portfolio"]["TextBox293"]);
const TextBox293IoProps = useIoStore((state)=>state["portfolio"]["TextBox293"]);
const TextBox293Cb = useTextBox293Cb()
const Image88Props = useStore((state)=>state["portfolio"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["portfolio"]["Image88"]);
const Image88Cb = useImage88Cb()
const TextBox297Props = useStore((state)=>state["portfolio"]["TextBox297"]);
const TextBox297IoProps = useIoStore((state)=>state["portfolio"]["TextBox297"]);
const TextBox297Cb = useTextBox297Cb()
const TextBox298Props = useStore((state)=>state["portfolio"]["TextBox298"]);
const TextBox298IoProps = useIoStore((state)=>state["portfolio"]["TextBox298"]);
const TextBox298Cb = useTextBox298Cb()
const TextBox296Props = useStore((state)=>state["portfolio"]["TextBox296"]);
const TextBox296IoProps = useIoStore((state)=>state["portfolio"]["TextBox296"]);
const TextBox296Cb = useTextBox296Cb()
const Image89Props = useStore((state)=>state["portfolio"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["portfolio"]["Image89"]);
const Image89Cb = useImage89Cb()
const TextBox300Props = useStore((state)=>state["portfolio"]["TextBox300"]);
const TextBox300IoProps = useIoStore((state)=>state["portfolio"]["TextBox300"]);
const TextBox300Cb = useTextBox300Cb()
const TextBox301Props = useStore((state)=>state["portfolio"]["TextBox301"]);
const TextBox301IoProps = useIoStore((state)=>state["portfolio"]["TextBox301"]);
const TextBox301Cb = useTextBox301Cb()
const TextBox299Props = useStore((state)=>state["portfolio"]["TextBox299"]);
const TextBox299IoProps = useIoStore((state)=>state["portfolio"]["TextBox299"]);
const TextBox299Cb = useTextBox299Cb()
const Image90Props = useStore((state)=>state["portfolio"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["portfolio"]["Image90"]);
const Image90Cb = useImage90Cb()
const TextBox303Props = useStore((state)=>state["portfolio"]["TextBox303"]);
const TextBox303IoProps = useIoStore((state)=>state["portfolio"]["TextBox303"]);
const TextBox303Cb = useTextBox303Cb()
const TextBox304Props = useStore((state)=>state["portfolio"]["TextBox304"]);
const TextBox304IoProps = useIoStore((state)=>state["portfolio"]["TextBox304"]);
const TextBox304Cb = useTextBox304Cb()
const TextBox302Props = useStore((state)=>state["portfolio"]["TextBox302"]);
const TextBox302IoProps = useIoStore((state)=>state["portfolio"]["TextBox302"]);
const TextBox302Cb = useTextBox302Cb()
const Image91Props = useStore((state)=>state["portfolio"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["portfolio"]["Image91"]);
const Image91Cb = useImage91Cb()
const TextBox37Props = useStore((state)=>state["portfolio"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["portfolio"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox38Props = useStore((state)=>state["portfolio"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["portfolio"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox39Props = useStore((state)=>state["portfolio"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["portfolio"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["portfolio"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["portfolio"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const Button5Props = useStore((state)=>state["portfolio"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["portfolio"]["Button5"]);
const Button5Cb = useButton5Cb()
const Button6Props = useStore((state)=>state["portfolio"]["Button6"]);
const Button6IoProps = useIoStore((state)=>state["portfolio"]["Button6"]);
const Button6Cb = useButton6Cb()
const Carousel2Props = useStore((state)=>state["portfolio"]["Carousel2"]);
const Carousel2IoProps = useIoStore((state)=>state["portfolio"]["Carousel2"]);
const Carousel2Cb = useCarousel2Cb()
const TextBox307Props = useStore((state)=>state["portfolio"]["TextBox307"]);
const TextBox307IoProps = useIoStore((state)=>state["portfolio"]["TextBox307"]);
const TextBox307Cb = useTextBox307Cb()
const TextBox308Props = useStore((state)=>state["portfolio"]["TextBox308"]);
const TextBox308IoProps = useIoStore((state)=>state["portfolio"]["TextBox308"]);
const TextBox308Cb = useTextBox308Cb()
const Image93Props = useStore((state)=>state["portfolio"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["portfolio"]["Image93"]);
const Image93Cb = useImage93Cb()
const TextBox306Props = useStore((state)=>state["portfolio"]["TextBox306"]);
const TextBox306IoProps = useIoStore((state)=>state["portfolio"]["TextBox306"]);
const TextBox306Cb = useTextBox306Cb()
const Image94Props = useStore((state)=>state["portfolio"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["portfolio"]["Image94"]);
const Image94Cb = useImage94Cb()
const Carousel5Props = useStore((state)=>state["portfolio"]["Carousel5"]);
const Carousel5IoProps = useIoStore((state)=>state["portfolio"]["Carousel5"]);
const Carousel5Cb = useCarousel5Cb()
const TextBox310Props = useStore((state)=>state["portfolio"]["TextBox310"]);
const TextBox310IoProps = useIoStore((state)=>state["portfolio"]["TextBox310"]);
const TextBox310Cb = useTextBox310Cb()
const TextBox311Props = useStore((state)=>state["portfolio"]["TextBox311"]);
const TextBox311IoProps = useIoStore((state)=>state["portfolio"]["TextBox311"]);
const TextBox311Cb = useTextBox311Cb()
const Image95Props = useStore((state)=>state["portfolio"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["portfolio"]["Image95"]);
const Image95Cb = useImage95Cb()
const TextBox309Props = useStore((state)=>state["portfolio"]["TextBox309"]);
const TextBox309IoProps = useIoStore((state)=>state["portfolio"]["TextBox309"]);
const TextBox309Cb = useTextBox309Cb()
const Image96Props = useStore((state)=>state["portfolio"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["portfolio"]["Image96"]);
const Image96Cb = useImage96Cb()
const Carousel6Props = useStore((state)=>state["portfolio"]["Carousel6"]);
const Carousel6IoProps = useIoStore((state)=>state["portfolio"]["Carousel6"]);
const Carousel6Cb = useCarousel6Cb()
const TextBox313Props = useStore((state)=>state["portfolio"]["TextBox313"]);
const TextBox313IoProps = useIoStore((state)=>state["portfolio"]["TextBox313"]);
const TextBox313Cb = useTextBox313Cb()
const TextBox314Props = useStore((state)=>state["portfolio"]["TextBox314"]);
const TextBox314IoProps = useIoStore((state)=>state["portfolio"]["TextBox314"]);
const TextBox314Cb = useTextBox314Cb()
const Image97Props = useStore((state)=>state["portfolio"]["Image97"]);
const Image97IoProps = useIoStore((state)=>state["portfolio"]["Image97"]);
const Image97Cb = useImage97Cb()
const TextBox312Props = useStore((state)=>state["portfolio"]["TextBox312"]);
const TextBox312IoProps = useIoStore((state)=>state["portfolio"]["TextBox312"]);
const TextBox312Cb = useTextBox312Cb()
const Image98Props = useStore((state)=>state["portfolio"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["portfolio"]["Image98"]);
const Image98Cb = useImage98Cb()
const Button19Props = useStore((state)=>state["portfolio"]["Button19"]);
const Button19IoProps = useIoStore((state)=>state["portfolio"]["Button19"]);
const Button19Cb = useButton19Cb()
const Button20Props = useStore((state)=>state["portfolio"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["portfolio"]["Button20"]);
const Button20Cb = useButton20Cb()

  return (<>
  <Flex1 className="p-portfolio Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Flex1 className="p-portfolio Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Div className="p-portfolio Div1 bpt" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<TextBox1 className="p-portfolio TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
</Div>
<Flex1 className="p-portfolio Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<TextBox1 className="p-portfolio TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox1 className="p-portfolio TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<TextBox1 className="p-portfolio TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<TextBox1 className="p-portfolio TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox1 className="p-portfolio TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<TextBox1 className="p-portfolio TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-portfolio Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Flex1 className="p-portfolio Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Flex1 className="p-portfolio Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Div className="p-portfolio Div2 bpt" {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<TextBox1 className="p-portfolio TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<Flex1 className="p-portfolio Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<TextBox1 className="p-portfolio TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<Div className="p-portfolio Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<Button className="p-portfolio Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
</Flex1>
<Button className="p-portfolio Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Div>
<Image className="p-portfolio Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Div className="p-portfolio Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<Div className="p-portfolio Div7 bpt" {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<Flex1 className="p-portfolio Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<TextBox1 className="p-portfolio TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Flex1>
</Div>
</Div>
<Div className="p-portfolio Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}/>
<TextBox1 className="p-portfolio TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<Div className="p-portfolio Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<Flex1 className="p-portfolio Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<TextBox1 className="p-portfolio TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<Image className="p-portfolio Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
<TextBox1 className="p-portfolio TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<Flex1 className="p-portfolio Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Button className="p-portfolio Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
<Button className="p-portfolio Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<TextBox1 className="p-portfolio TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
</Flex1>
<Image className="p-portfolio Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<TextBox1 className="p-portfolio TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex1>
<TextBox1 className="p-portfolio TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox1 className="p-portfolio TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<TextBox1 className="p-portfolio TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<Flex1 className="p-portfolio Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Flex1 className="p-portfolio Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Div className="p-portfolio Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<Image className="p-portfolio Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<TextBox1 className="p-portfolio TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox1 className="p-portfolio TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
<UnorderedList className="p-portfolio UnorderedList4 bpt" {...UnorderedList4Props} {...UnorderedList4Cb} {...UnorderedList4IoProps}/>
</Div>
<Div className="p-portfolio Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<Image className="p-portfolio Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<TextBox1 className="p-portfolio TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox1 className="p-portfolio TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<UnorderedList className="p-portfolio UnorderedList5 bpt" {...UnorderedList5Props} {...UnorderedList5Cb} {...UnorderedList5IoProps}/>
</Div>
<Div className="p-portfolio Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<Image className="p-portfolio Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<TextBox1 className="p-portfolio TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<TextBox1 className="p-portfolio TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<UnorderedList className="p-portfolio UnorderedList6 bpt" {...UnorderedList6Props} {...UnorderedList6Cb} {...UnorderedList6IoProps}/>
</Div>
</Flex1>
</Flex1>
</Div>
<Flex1 className="p-portfolio Flex143 bpt" {...Flex143Props} {...Flex143Cb} {...Flex143IoProps}>
<Flex1 className="p-portfolio Flex23 bpt" {...Flex23Props} {...Flex23Cb} {...Flex23IoProps}>
<Flex1 className="p-portfolio Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<Div className="p-portfolio Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<TextBox1 className="p-portfolio TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox1 className="p-portfolio TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox1 className="p-portfolio TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox1 className="p-portfolio TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Div>
<Div className="p-portfolio Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<Div className="p-portfolio Div20 bpt" {...Div20Props} {...Div20Cb} {...Div20IoProps}>
<Button className="p-portfolio Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<Button className="p-portfolio Button6 bpt" {...Button6Props} {...Button6Cb} {...Button6IoProps}/>
</Div>
</Div>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-portfolio Flex151 bpt" {...Flex151Props} {...Flex151Cb} {...Flex151IoProps}>
<Div className="p-portfolio Div136 bpt" {...Div136Props} {...Div136Cb} {...Div136IoProps}>
<Flex1 className="p-portfolio Flex144 bpt" {...Flex144Props} {...Flex144Cb} {...Flex144IoProps}>
<Div className="p-portfolio Div130 bpt" {...Div130Props} {...Div130Cb} {...Div130IoProps}>
<Carousel className="p-portfolio Carousel2 bpt" {...Carousel2Props} {...Carousel2Cb} {...Carousel2IoProps}/>
<Div className="p-portfolio Div131 bpt" {...Div131Props} {...Div131Cb} {...Div131IoProps}>
<TextBox1 className="p-portfolio TextBox308 bpt" {...TextBox308Props} {...TextBox308Cb} {...TextBox308IoProps}/>
<TextBox1 className="p-portfolio TextBox307 bpt" {...TextBox307Props} {...TextBox307Cb} {...TextBox307IoProps}/>
<Flex1 className="p-portfolio Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<TextBox1 className="p-portfolio TextBox306 bpt" {...TextBox306Props} {...TextBox306Cb} {...TextBox306IoProps}/>
<Image className="p-portfolio Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<Image className="p-portfolio Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
</Flex1>
</Div>
</Div>
<Div className="p-portfolio Div133 bpt" {...Div133Props} {...Div133Cb} {...Div133IoProps}>
<Carousel className="p-portfolio Carousel5 bpt" {...Carousel5Props} {...Carousel5Cb} {...Carousel5IoProps}/>
<Div className="p-portfolio Div132 bpt" {...Div132Props} {...Div132Cb} {...Div132IoProps}>
<TextBox1 className="p-portfolio TextBox310 bpt" {...TextBox310Props} {...TextBox310Cb} {...TextBox310IoProps}/>
<TextBox1 className="p-portfolio TextBox311 bpt" {...TextBox311Props} {...TextBox311Cb} {...TextBox311IoProps}/>
<Flex1 className="p-portfolio Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<TextBox1 className="p-portfolio TextBox309 bpt" {...TextBox309Props} {...TextBox309Cb} {...TextBox309IoProps}/>
<Image className="p-portfolio Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Image className="p-portfolio Image96 bpt" {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
</Flex1>
</Div>
</Div>
<Div className="p-portfolio Div135 bpt" {...Div135Props} {...Div135Cb} {...Div135IoProps}>
<Carousel className="p-portfolio Carousel6 bpt" {...Carousel6Props} {...Carousel6Cb} {...Carousel6IoProps}/>
<Div className="p-portfolio Div134 bpt" {...Div134Props} {...Div134Cb} {...Div134IoProps}>
<TextBox1 className="p-portfolio TextBox313 bpt" {...TextBox313Props} {...TextBox313Cb} {...TextBox313IoProps}/>
<TextBox1 className="p-portfolio TextBox314 bpt" {...TextBox314Props} {...TextBox314Cb} {...TextBox314IoProps}/>
<Flex1 className="p-portfolio Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<TextBox1 className="p-portfolio TextBox312 bpt" {...TextBox312Props} {...TextBox312Cb} {...TextBox312IoProps}/>
<Image className="p-portfolio Image97 bpt" {...Image97Props} {...Image97Cb} {...Image97IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Image className="p-portfolio Image98 bpt" {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<Div className="p-portfolio Div137 bpt" {...Div137Props} {...Div137Cb} {...Div137IoProps}>
<Button className="p-portfolio Button20 bpt" {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
<Button className="p-portfolio Button19 bpt" {...Button19Props} {...Button19Cb} {...Button19IoProps}/>
</Div>
</Flex1>
</Div>
</Div>
</Flex1>
</Div>
</Flex1>
<Div className="p-portfolio Div21 bpt" {...Div21Props} {...Div21Cb} {...Div21IoProps}/>
<Flex1 className="p-portfolio Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}/>
<Carousel className="p-portfolio Carousel1 bpt" {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
<Image className="p-portfolio Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<Flex1 className="p-portfolio Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<Flex1 className="p-portfolio Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Div className="p-portfolio Div115 bpt" {...Div115Props} {...Div115Cb} {...Div115IoProps}>
<TextBox1 className="p-portfolio TextBox266 bpt" {...TextBox266Props} {...TextBox266Cb} {...TextBox266IoProps}/>
<TextBox1 className="p-portfolio TextBox267 bpt" {...TextBox267Props} {...TextBox267Cb} {...TextBox267IoProps}/>
<Flex1 className="p-portfolio Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<TextBox1 className="p-portfolio TextBox268 bpt" {...TextBox268Props} {...TextBox268Cb} {...TextBox268IoProps}/>
<Image className="p-portfolio Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
</Flex1>
</Div>
<Div className="p-portfolio Div116 bpt" {...Div116Props} {...Div116Cb} {...Div116IoProps}>
<Div className="p-portfolio Div117 bpt" {...Div117Props} {...Div117Cb} {...Div117IoProps}>
<TextBox1 className="p-portfolio TextBox271 bpt" {...TextBox271Props} {...TextBox271Cb} {...TextBox271IoProps}/>
<TextBox1 className="p-portfolio TextBox270 bpt" {...TextBox270Props} {...TextBox270Cb} {...TextBox270IoProps}/>
<Flex1 className="p-portfolio Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox1 className="p-portfolio TextBox269 bpt" {...TextBox269Props} {...TextBox269Cb} {...TextBox269IoProps}/>
<Image className="p-portfolio Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
</Flex1>
</Div>
<Div className="p-portfolio Div125 bpt" {...Div125Props} {...Div125Cb} {...Div125IoProps}>
<TextBox1 className="p-portfolio TextBox294 bpt" {...TextBox294Props} {...TextBox294Cb} {...TextBox294IoProps}/>
<TextBox1 className="p-portfolio TextBox295 bpt" {...TextBox295Props} {...TextBox295Cb} {...TextBox295IoProps}/>
<Flex1 className="p-portfolio Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<TextBox1 className="p-portfolio TextBox293 bpt" {...TextBox293Props} {...TextBox293Cb} {...TextBox293IoProps}/>
<Image className="p-portfolio Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
</Flex1>
</Div>
<Div className="p-portfolio Div126 bpt" {...Div126Props} {...Div126Cb} {...Div126IoProps}>
<TextBox1 className="p-portfolio TextBox297 bpt" {...TextBox297Props} {...TextBox297Cb} {...TextBox297IoProps}/>
<TextBox1 className="p-portfolio TextBox298 bpt" {...TextBox298Props} {...TextBox298Cb} {...TextBox298IoProps}/>
<Flex1 className="p-portfolio Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<TextBox1 className="p-portfolio TextBox296 bpt" {...TextBox296Props} {...TextBox296Cb} {...TextBox296IoProps}/>
<Image className="p-portfolio Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
</Flex1>
</Div>
<Div className="p-portfolio Div127 bpt" {...Div127Props} {...Div127Cb} {...Div127IoProps}>
<TextBox1 className="p-portfolio TextBox300 bpt" {...TextBox300Props} {...TextBox300Cb} {...TextBox300IoProps}/>
<TextBox1 className="p-portfolio TextBox301 bpt" {...TextBox301Props} {...TextBox301Cb} {...TextBox301IoProps}/>
<Flex1 className="p-portfolio Flex141 bpt" {...Flex141Props} {...Flex141Cb} {...Flex141IoProps}>
<TextBox1 className="p-portfolio TextBox299 bpt" {...TextBox299Props} {...TextBox299Cb} {...TextBox299IoProps}/>
<Image className="p-portfolio Image90 bpt" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
</Flex1>
</Div>
<Div className="p-portfolio Div128 bpt" {...Div128Props} {...Div128Cb} {...Div128IoProps}>
<TextBox1 className="p-portfolio TextBox303 bpt" {...TextBox303Props} {...TextBox303Cb} {...TextBox303IoProps}/>
<TextBox1 className="p-portfolio TextBox304 bpt" {...TextBox304Props} {...TextBox304Cb} {...TextBox304IoProps}/>
<Flex1 className="p-portfolio Flex142 bpt" {...Flex142Props} {...Flex142Cb} {...Flex142IoProps}>
<TextBox1 className="p-portfolio TextBox302 bpt" {...TextBox302Props} {...TextBox302Cb} {...TextBox302IoProps}/>
<Image className="p-portfolio Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
</Flex1>
</Div>
</Div>
</Flex1>
</Flex1>
<Div className="p-portfolio Div4 bpt" {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<Div className="p-portfolio Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}/>
</Div>
<Flex1 className="p-portfolio Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Flex1 className="p-portfolio Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Div className="p-portfolio Div25 bpt" {...Div25Props} {...Div25Cb} {...Div25IoProps}>
<TextBox1 className="p-portfolio TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox1 className="p-portfolio TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox1 className="p-portfolio TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox1 className="p-portfolio TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Div>
<Div className="p-portfolio Div26 bpt" {...Div26Props} {...Div26Cb} {...Div26IoProps}>
<TextBox1 className="p-portfolio TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Div>
</Flex1>
</Flex1>
<Flex1 className="p-portfolio Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Flex1 className="p-portfolio Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Image className="p-portfolio Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<Flex1 className="p-portfolio Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}/>
<Image className="p-portfolio Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<Image className="p-portfolio Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
<Div className="p-portfolio Div30 bpt" {...Div30Props} {...Div30Cb} {...Div30IoProps}>
<Image className="p-portfolio Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<Div className="p-portfolio Div31 bpt" {...Div31Props} {...Div31Cb} {...Div31IoProps}/>
<Image className="p-portfolio Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<Flex1 className="p-portfolio Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Div className="p-portfolio Div28 bpt" {...Div28Props} {...Div28Cb} {...Div28IoProps}>
<TextBox1 className="p-portfolio TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox1 className="p-portfolio TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<TextBox1 className="p-portfolio TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox1 className="p-portfolio TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
</Div>
<Div className="p-portfolio Div27 bpt" {...Div27Props} {...Div27Cb} {...Div27IoProps}>
<TextBox1 className="p-portfolio TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Div>
</Flex1>
</Div>
<Div className="p-portfolio Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}/>
</Flex1>
</Flex1>
<Div className="p-portfolio Div33 bpt" {...Div33Props} {...Div33Cb} {...Div33IoProps}>
<Flex1 className="p-portfolio Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Flex1 className="p-portfolio Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Div className="p-portfolio Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<Div className="p-portfolio Div51 bpt" {...Div51Props} {...Div51Cb} {...Div51IoProps}>
<Flex1 className="p-portfolio Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<Image className="p-portfolio Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
<TextBox1 className="p-portfolio TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex1>
</Div>
<Flex1 className="p-portfolio Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Div className="p-portfolio Div36 bpt" {...Div36Props} {...Div36Cb} {...Div36IoProps}>
<TextBox1 className="p-portfolio TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<TextBox1 className="p-portfolio TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<Image className="p-portfolio Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox1 className="p-portfolio TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Div className="p-portfolio Div37 bpt" {...Div37Props} {...Div37Cb} {...Div37IoProps}>
<TextBox1 className="p-portfolio TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
<TextBox1 className="p-portfolio TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<TextBox1 className="p-portfolio TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<Image className="p-portfolio Image18 bpt" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Div className="p-portfolio Div38 bpt" {...Div38Props} {...Div38Cb} {...Div38IoProps}>
<TextBox1 className="p-portfolio TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox1 className="p-portfolio TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox1 className="p-portfolio TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<Image className="p-portfolio Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
</Flex1>
</Div>
<Div className="p-portfolio Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<TextBox1 className="p-portfolio TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
<Flex1 className="p-portfolio Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Div className="p-portfolio Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<TextBox1 className="p-portfolio TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox1 className="p-portfolio TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<Image className="p-portfolio Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox1 className="p-portfolio TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Div className="p-portfolio Div39 bpt" {...Div39Props} {...Div39Cb} {...Div39IoProps}>
<TextBox1 className="p-portfolio TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<TextBox1 className="p-portfolio TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<TextBox1 className="p-portfolio TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<Image className="p-portfolio Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Div className="p-portfolio Div41 bpt" {...Div41Props} {...Div41Cb} {...Div41IoProps}>
<TextBox1 className="p-portfolio TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox1 className="p-portfolio TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
<TextBox1 className="p-portfolio TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
<Image className="p-portfolio Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Flex1>
</Div>
<Div className="p-portfolio Div50 bpt" {...Div50Props} {...Div50Cb} {...Div50IoProps}>
<Div className="p-portfolio Div52 bpt" {...Div52Props} {...Div52Cb} {...Div52IoProps}>
<Flex1 className="p-portfolio Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<Image className="p-portfolio Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
<TextBox1 className="p-portfolio TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
</Flex1>
</Div>
<Flex1 className="p-portfolio Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Image className="p-portfolio Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
<Div className="p-portfolio Div48 bpt" {...Div48Props} {...Div48Cb} {...Div48IoProps}>
<TextBox1 className="p-portfolio TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox1 className="p-portfolio TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<Image className="p-portfolio Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
<TextBox1 className="p-portfolio TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Image className="p-portfolio Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
<Div className="p-portfolio Div47 bpt" {...Div47Props} {...Div47Cb} {...Div47IoProps}>
<TextBox1 className="p-portfolio TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<TextBox1 className="p-portfolio TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<TextBox1 className="p-portfolio TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<Image className="p-portfolio Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Image className="p-portfolio Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
<Div className="p-portfolio Div49 bpt" {...Div49Props} {...Div49Cb} {...Div49IoProps}>
<TextBox1 className="p-portfolio TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<TextBox1 className="p-portfolio TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
<TextBox1 className="p-portfolio TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<Image className="p-portfolio Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Flex1>
</Div>
</Flex1>
</Flex1>
</Div>
<Flex1 className="p-portfolio Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}/>
<Flex1 className="p-portfolio Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<Div className="p-portfolio Div60 bpt" {...Div60Props} {...Div60Cb} {...Div60IoProps}/>
<Div className="p-portfolio Div69 bpt" {...Div69Props} {...Div69Cb} {...Div69IoProps}/>
<Flex1 className="p-portfolio Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<Div className="p-portfolio Div55 bpt" {...Div55Props} {...Div55Cb} {...Div55IoProps}>
<Div className="p-portfolio Div59 bpt" {...Div59Props} {...Div59Cb} {...Div59IoProps}>
<TextBox1 className="p-portfolio TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<Flex1 className="p-portfolio Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Image className="p-portfolio Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
<Div className="p-portfolio Div56 bpt" {...Div56Props} {...Div56Cb} {...Div56IoProps}>
<Image className="p-portfolio Image35 bpt" {...Image35Props} {...Image35Cb} {...Image35IoProps}/>
<TextBox1 className="p-portfolio TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<Flex1 className="p-portfolio Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Div className="p-portfolio Div57 bpt" {...Div57Props} {...Div57Cb} {...Div57IoProps}>
<TextBox1 className="p-portfolio TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<TextBox1 className="p-portfolio TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
</Div>
<Div className="p-portfolio Div58 bpt" {...Div58Props} {...Div58Cb} {...Div58IoProps}>
<Button className="p-portfolio Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
<Button className="p-portfolio Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
</Div>
</Flex1>
</Div>
</Flex1>
</Div>
</Flex1>
</Flex1>
<Flex1 className="p-portfolio Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Div className="p-portfolio Div76 bpt" {...Div76Props} {...Div76Cb} {...Div76IoProps}/>
<Div className="p-portfolio Div75 bpt" {...Div75Props} {...Div75Cb} {...Div75IoProps}/>
<Flex1 className="p-portfolio Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Div className="p-portfolio Div74 bpt" {...Div74Props} {...Div74Cb} {...Div74IoProps}>
<Div className="p-portfolio Div73 bpt" {...Div73Props} {...Div73Cb} {...Div73IoProps}>
<TextBox1 className="p-portfolio TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<Flex1 className="p-portfolio Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Image className="p-portfolio Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<Div className="p-portfolio Div72 bpt" {...Div72Props} {...Div72Cb} {...Div72IoProps}>
<Flex1 className="p-portfolio Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<TextBox1 className="p-portfolio TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
<Image className="p-portfolio Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Flex1>
<Image className="p-portfolio Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<Flex1 className="p-portfolio Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<Div className="p-portfolio Div71 bpt" {...Div71Props} {...Div71Cb} {...Div71IoProps}>
<TextBox1 className="p-portfolio TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
<TextBox1 className="p-portfolio TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
</Div>
<Div className="p-portfolio Div70 bpt" {...Div70Props} {...Div70Cb} {...Div70IoProps}>
<Button className="p-portfolio Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
<Button className="p-portfolio Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
</Div>
<Flex1 className="p-portfolio Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<TextBox1 className="p-portfolio TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<Image className="p-portfolio Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-portfolio Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<TextBox1 className="p-portfolio TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<Image className="p-portfolio Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<TextBox1 className="p-portfolio TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
<Image className="p-portfolio Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
</Flex1>
</Div>
<Div className="p-portfolio Div77 bpt" {...Div77Props} {...Div77Cb} {...Div77IoProps}>
<Flex1 className="p-portfolio Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<TextBox1 className="p-portfolio TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<Image className="p-portfolio Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox1 className="p-portfolio TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<Image className="p-portfolio Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<TextBox1 className="p-portfolio TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
<Image className="p-portfolio Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
</Flex1>
<Flex1 className="p-portfolio Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<TextBox1 className="p-portfolio TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
<Image className="p-portfolio Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
</Flex1>
</Div>
</Flex1>
<TextBox1 className="p-portfolio TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<TextBox1 className="p-portfolio TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<Flex1 className="p-portfolio Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Div className="p-portfolio Div107 bpt" {...Div107Props} {...Div107Cb} {...Div107IoProps}>
<TextBox1 className="p-portfolio TextBox249 bpt" {...TextBox249Props} {...TextBox249Cb} {...TextBox249IoProps}/>
<TextBox1 className="p-portfolio TextBox250 bpt" {...TextBox250Props} {...TextBox250Cb} {...TextBox250IoProps}/>
<TextBox1 className="p-portfolio TextBox248 bpt" {...TextBox248Props} {...TextBox248Cb} {...TextBox248IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox251 bpt" {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
<Div className="p-portfolio Div106 bpt" {...Div106Props} {...Div106Cb} {...Div106IoProps}>
<TextBox1 className="p-portfolio TextBox246 bpt" {...TextBox246Props} {...TextBox246Cb} {...TextBox246IoProps}/>
<TextBox1 className="p-portfolio TextBox245 bpt" {...TextBox245Props} {...TextBox245Cb} {...TextBox245IoProps}/>
<TextBox1 className="p-portfolio TextBox247 bpt" {...TextBox247Props} {...TextBox247Cb} {...TextBox247IoProps}/>
</Div>
<Div className="p-portfolio Div105 bpt" {...Div105Props} {...Div105Cb} {...Div105IoProps}>
<TextBox1 className="p-portfolio TextBox243 bpt" {...TextBox243Props} {...TextBox243Cb} {...TextBox243IoProps}/>
<TextBox1 className="p-portfolio TextBox244 bpt" {...TextBox244Props} {...TextBox244Cb} {...TextBox244IoProps}/>
<TextBox1 className="p-portfolio TextBox242 bpt" {...TextBox242Props} {...TextBox242Cb} {...TextBox242IoProps}/>
</Div>
<Div className="p-portfolio Div104 bpt" {...Div104Props} {...Div104Cb} {...Div104IoProps}>
<TextBox1 className="p-portfolio TextBox240 bpt" {...TextBox240Props} {...TextBox240Cb} {...TextBox240IoProps}/>
<TextBox1 className="p-portfolio TextBox241 bpt" {...TextBox241Props} {...TextBox241Cb} {...TextBox241IoProps}/>
<TextBox1 className="p-portfolio TextBox239 bpt" {...TextBox239Props} {...TextBox239Cb} {...TextBox239IoProps}/>
</Div>
</Flex1>
<TextBox1 className="p-portfolio TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<Flex1 className="p-portfolio Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<Div className="p-portfolio Div79 bpt" {...Div79Props} {...Div79Cb} {...Div79IoProps}>
<TextBox1 className="p-portfolio TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<TextBox1 className="p-portfolio TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<TextBox1 className="p-portfolio TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Div>
<TextBox1 className="p-portfolio TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<Div className="p-portfolio Div80 bpt" {...Div80Props} {...Div80Cb} {...Div80IoProps}>
<TextBox1 className="p-portfolio TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
<TextBox1 className="p-portfolio TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox1 className="p-portfolio TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
</Div>
<Div className="p-portfolio Div81 bpt" {...Div81Props} {...Div81Cb} {...Div81IoProps}>
<TextBox1 className="p-portfolio TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<TextBox1 className="p-portfolio TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
<TextBox1 className="p-portfolio TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
</Div>
<Div className="p-portfolio Div82 bpt" {...Div82Props} {...Div82Cb} {...Div82IoProps}>
<TextBox1 className="p-portfolio TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
<TextBox1 className="p-portfolio TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<TextBox1 className="p-portfolio TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
</Div>
</Flex1>
</Div>
</Flex1>
</Flex1>
  </>);
}
