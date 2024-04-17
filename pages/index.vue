<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

</script>
<template>
  <div class="flex flex-col items-center fixed inset-y-30 right-0 z-1">
    <button
      type="button"
      class="bg-brand border-0 text-white text-5 font-600 write-vertical-left tracking-widest rounded-tl-4 py-25px px-18px cursor-pointer hover:bg-brand-dark whitespace-nowrap"
    >
      <img src="/location-call.svg" alt="呼叫代駕icon" />
      呼叫代駕
    </button>
    <button
      type="button"
      class="bg-warning border-0 text-white text-5 font-600 write-vertical-left tracking-widest rounded-bl-4 py-25px px-18px cursor-pointer hover:bg-primary flex items-center whitespace-nowrap"
    >
      <img class="mb-2" src="/order.svg" alt="訂單查詢icon" />
      訂單查詢
    </button>
    <div class="bg-brand flex flex-col items-center justify-center mt-200px">
      <button
        type="button"
        class="border-0 bg-transparent w-50px h-50px hover:bg-brand-dark cursor-pointer"
        @click="scrollToTop"
      >
        <img src="/arrow-top.svg" alt="向上的箭頭" />
        <p class="text-white font-700">Top</p>
      </button>
    </div>
  </div>
  <section>
    <div
      class="flex items-end w-full bg-center bg-cover h-320px"
      style="background-image: url(/banner.png)"
    >
      <div class="container flex justify-start items-end ms-15">
        <h1 class="text-6xl text-white my-0 font-bold font-900">附駕接送</h1>
        <img class="object-contain h-73px" src="/carw.svg" alt="白色汽車" />
      </div>
    </div>
  </section>
  <section>
    <div
      class="flex-col mx-auto text-center py-20 w-7/8 position-relative"
    >
      <h3 class="text-brand-dark text-9 font-bold mb-5">格上租車 X 台灣代駕</h3>
      <hr class="mb-5" style="width: 265px" />
      <p class="text-brand text-6 font-medium mb-20">專業專注 與您同行</p>
      <PageTitle title="主管/公務車駕駛四大優勢" />
      <p class="w-7/8 mx-auto text-gray-900 text-5 text-left lh-40px">
        依據客戶不同需求，以派遣方式提供客戶駕駛服務，服務涵蓋長/短期、外語專長…等公務車/主管駕駛派遣，客戶可免除招募、訓練、管理司機之繁複手續，由格上專業團隊為您代勞。
      </p>
      <img
        class="hidden object-contain position-absolute top-133px right-[-100px] w-317px h-200px hidden"
        src="/tellphone.svg"
        alt="雙手握手機"
      />
    </div>
    <div>
      <img class="hidden max-w-full object-contain h-295px" src="/bg-line.svg" alt="裝飾線條" />
    </div>
  </section>
  <section class="hidden flex justify-center items-center mx-auto w-full lg:w-2/3 gap-70px"
  >
    <div class="hidden flex-col flex-wrap flex-start">
      <div class="flex items-end mb-5">
        <p class="text-warning text-20 font-900">01</p>
        <h5 class="text-brand font-700" style="margin-bottom: 10px">
          嚴格篩選司機素質
        </h5>
      </div>
      <div class="flex items-center gap-5 mb-5">
        <div class="h-1px w-60px bg-gray-400"></div>
        <p>需有職業駕照、良民證、無肇事紀錄與品格審查…等，以業界高標進行審核</p>
      </div>
      <div class="position-relative">
        <img class="h-250px object-contain" src="/driver.jpg" alt="開車司機" />
        <p
          class="position-absolute left-[4px] bottom-[-10px] text-white text-center text-18px bg-[#26ADD7] bg-op-50 px-14px py-2 z-1"
        >
          具職業駕照
        </p>
        <p
          class="position-absolute left-[4px] bottom-[-10px] text-white text-center text-18px bg-[#434343] bg-op-65% w-118px h-34px"
        ></p>
      </div>
    </div>
    <div class="hidden position-relative">
      <img
        class="object-contain position-absolute top-222px right-[-140px]"
        src="/deco-arrow.svg"
        alt="向右的箭頭"
      />
      <img class="object-contain" src="/circleselect.svg" alt="甄選制度插圖" />
      <h2 class="text-warning text-9 font-500 mb-30px">甄選制度</h2>
      <p class="text-gray-900 lh-40px flex items-center">
        <span
          class="bg-gray-900 w-1 h-1 rounded-full inline-block mr-2"
          style=""
        ></span>
        駕駛均具備良民證與無肇事紀錄證明書
      </p>
      <p class="text-gray-900 lh-40px flex items-center">
        <span
          class="bg-gray-900 w-1 h-1 rounded-full inline-block mr-2"
          style=""
        ></span>
        高中職以上學歷並需具中高階主管駕駛實務經驗
      </p>
      <p class="text-gray-900 lh-40px flex items-center">
        <span
          class="bg-gray-900 w-1 h-1 rounded-full inline-block mr-2"
          style=""
        ></span>
        須通過人力派遣公司與客戶共兩次面談
      </p>
    </div>
  </section>
  <img class="hidden w-full object-contain" src="/city.svg" alt="背景圖案" />
  <section class="hidden bg-gray-100">
    <PageTitle title="自僱駕駛管理繁瑣 不如交給專業讓您好輕鬆" pt="16" />
    <div class="w-full mx-auto text-white pb-20">
      <div class="w-7/8 mx-auto flex">
        <div class="lg:w-1/15 form-t">項目</div>
        <div class="lg:w-7/15 form-t">自行聘僱</div>
        <div class="lg:w-7/15 form-t">格上派遣</div>
      </div>
      <div class="w-7/8 mx-auto flex">
        <div class="lg:w-1/15 form-b border-t-0">司機招募</div>
        <div class="lg:w-7/15 form-b border-t-0">
          自行面試，費時費力時間冗長
        </div>
        <div class="lg:w-7/15 form-b border-t-0 text-brand-darker">
          格上由專業司機資料庫迅速找到適合人選
        </div>
      </div>
      <div class="w-7/8 mx-auto flex">
        <div class="lg:w-1/15 form-w">駕駛品質</div>
        <div class="lg:w-7/15 form-w">人員品質難以掌握</div>
        <div class="lg:w-7/15 form-w text-brand-darker">
          由專業人員嚴格篩選，品質有保障
        </div>
      </div>
      <div class="w-7/8 mx-auto flex">
        <div class="lg:w-1/15 form-b">人事成本</div>
        <div class="lg:w-7/15 form-b">人員不穩定，易產生替換成本</div>
        <div class="lg:w-7/15 form-b text-brand-darker">
          人員穩定，免除替換司機之成本支出
        </div>
      </div>
      <div class="w-7/8 mx-auto flex">
        <div class="lg:w-1/15 form-w">教育訓練</div>
        <div class="lg:w-7/15 form-w">需自行訓練，較無SOP</div>
        <div class="lg:w-7/15 form-w text-brand-darker">
          由管理團隊進行完整訓練，確保駕駛具備專業技能
        </div>
      </div>
      <div class="w-7/8 mx-auto flex">
        <div class="lg:w-1/15 form-b">駕駛管理</div>
        <div class="lg:w-7/15 form-b">由行政或秘書管理，勞心勞力</div>
        <div class="lg:w-7/15 form-b text-brand-darker">
          由格上專業團隊進行管理
        </div>
      </div>
      <div class="w-7/8 mx-auto flex">
        <div class="lg:w-1/15 form-w">代班駕駛</div>
        <div class="lg:w-7/15 form-w">駕駛請假難以調度</div>
        <div class="lg:w-7/15 form-w text-brand-darker">
          格上及時提供代班駕駛
        </div>
      </div>
    </div>
  </section>
  <section class="hidden w-full bg-gray-100 pb-20">
    <PageTitle title="預約流程" pt="15" pb="15" />
    <div class="lg:w-7/8 gap-[52px] mx-auto flex flex-wrap  pb-20">
      <div
        class="lg:w-18% flex flex-col justify-center items-center bg-white p-10px rounded-3 border-solid border-1 border-brand"
      >
        <div class="flex w-full justify-between items-center">
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
        </div>
        <p class="text-warning text-6 text-center mt-2 mb-3">Step1</p>
        <img class="mb-2" src="/reserve01.png" alt="" />
        <h5 class="text-gray-900 font-bold text-center mb-2">選擇接駁方案</h5>
        <div class="flex w-full justify-between items-center">
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
        </div>
      </div>
      <img src="/arrowright.svg" alt="向右箭頭" />
      <div
        class="lg:w-18% flex flex-col justify-center items-center bg-white p-10px rounded-3 border-solid border-1 border-brand"
      >
        <div class="flex w-full justify-between items-center">
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
        </div>
        <p class="text-warning text-6 text-center mt-2 mb-3">Step2</p>
        <img class="mb-2" src="/reserve02.png" alt="" />
        <h5 class="text-gray-900 font-bold text-center mb-2">填寫資料</h5>
        <div class="flex w-full justify-between items-center">
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
        </div>
      </div>
      <img src="/arrowright.svg" alt="向右箭頭" />
      <div
        class="lg:w-18% flex flex-col justify-center items-center bg-white p-10px rounded-3 border-solid border-1 border-brand"
      >
        <div class="flex w-full justify-between items-center">
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
        </div>
        <p class="text-warning text-6 text-center mt-2 mb-3">Step3</p>
        <img class="mb-2" src="/reserve03.png" alt="" />
        <h5 class="text-gray-900 font-bold text-center mb-2">進行付款</h5>
        <div class="flex w-full justify-between items-center">
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
        </div>
      </div>
      <img src="/arrowright.svg" alt="向右箭頭" />
      <div
        class="lg:w-18% flex flex-col justify-center items-center bg-white p-10px rounded-3 border-solid border-1 border-brand"
      >
        <div class="flex w-full justify-between items-center">
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
        </div>
        <p class="text-warning text-6 text-center mt-2 mb-3">Step4</p>
        <img class="mb-2" src="/reserve04.png" alt="" />
        <h5 class="text-gray-900 font-bold text-center mb-2">完成預約</h5>
        <div class="flex w-full justify-between items-center">
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
          <div class="bg-gray-400 w-1 h-1 rounded-full inline-block mr-2"></div>
        </div>
      </div>
    </div>
    <button
      class="flex items-center mx-auto bg-primary border-0 rounded-full px-4 py-[10px] cursor-pointer hover:bg-primary-dark"
      type="button"
    >
      <a
        class="flex items-center text-white text-5 font-700 no-underline"
        href=""
      >
        <img class="me-1" src="/callicon.svg" alt="呼叫代駕按鈕" />
        呼叫代駕
      </a>
    </button>
  </section>
  <section class="hidden">
    <div class="flex flex-col mx-auto text-center py-20 max-w-1024px">
      <h3 class="text-brand-dark text-9 font-bold mb-5">格上租車 X 台灣代駕</h3>
      <hr class="mb-5" style="width: 265px" />
      <p class="text-brand text-6 font-medium mb-20">專業專注 與您同行</p>
      <h2 class="title mb-20">代駕起步費用計算(台幣/元)</h2>
    </div>
    <ul class="flex justify-center items-center mx-auto lg:w-7/8 gap-40px mb-6">
      <li class="flex flex-col justify-center items-center lg:w-1/3">
        <img class="mb-2" src="/clock01.svg" alt="全時段" />
        <p class="text-brand text-center font-600 mb-2">全時段</p>
        <div class="w-full bg-brand-light rounded-full">
          <p class="text-white text-center py-5px">3公里內 $300</p>
        </div>
      </li>
      <li class="flex flex-col justify-center items-center lg:w-1/3">
        <img class="mb-2" src="/clock02.svg" alt="07:00 - 23:59" />
        <p class="text-brand text-center font-600 mb-2">07:00 - 23:59</p>
        <div class="w-full bg-gray-900 rounded-full">
          <p class="text-white text-center py-5px">10公里內 $450</p>
        </div>
      </li>
      <li class="flex flex-col justify-center items-center lg:w-1/3">
        <img class="mb-2" src="/clock03.svg" alt="00:00 - 06:00" />
        <p class="text-brand text-center font-600 mb-2">00:00 - 06:00</p>
        <div class="w-full bg-primary-dark rounded-full">
          <p class="text-white text-center py-5px">10公里內 $550</p>
        </div>
      </li>
    </ul>
    <ol class="w-7/8 mx-auto pb-30 position-relative">
      <li class="lh-loose text-gray-900">
        1. 格上租車與台灣代駕為事業策略夥伴， 攜手伴您平安回家。
      </li>
      <li class="lh-loose text-gray-900">
        2.
        起步價時段，依照實際出發開車時間為準。累計里程計費，行駛超過10公里，每1公里加收50，行駛超過30公里，每2公里加收50，未滿1公里以1公里計費。
      </li>
      <li class="lh-loose text-gray-900">
        3. 司機抵達後等候未滿20分鐘不收費，滿20分鐘加收50元，之後每分鐘加收5元。
      </li>
      <li class="lh-loose text-gray-900">
        4.
        格上租車與台灣代駕保留隨時修改、變更、暫停或終止本服務內容之權利，並以雙方網站公告為準。
      </li>
      <li class="lh-loose text-gray-900">
        5. 欲知更多代駕介紹，請點擊『 服務說明 』。
      </li>
      <li class="lh-loose text-gray-900">
        6. 如欲進一步瞭解服務內容，可撥打0800-005-209洽詢台灣代駕客服專線。
      </li>
      <li class="position-absolute right-0 top-10">
        <img src="/handwithhand.svg" alt="手握手" />
      </li>
    </ol>
  </section>
</template>

<style scoped></style>
