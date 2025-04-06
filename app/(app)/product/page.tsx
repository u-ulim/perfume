"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { weekends } from "@/constants";

import React from "react";
import { DetailDelivery } from "@/components/icon/icon";

import fiveImage from "@/src/assets/detail/five.png";
import detailImage from "@/src/assets/detail/detail.png";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));

  const perfume = weekends.find((item) => item.id === id);

  if (!perfume) {
    return <div className="p-10">해당 상품을 찾을 수 없습니다 😭</div>;
  }

  const {
    brand,
    title,
    price,
    img,
    sale,
    review,
    concentration,
    mainAccords,
    mainNotes,
    scentDescription,
  } = perfume;

  //할인 가격 계산
  const priceNumber = Number(price.replace(/[^0-9]/g, ""));
  const discountedPrice = sale
    ? Math.floor(priceNumber * (1 - sale / 100))
    : priceNumber;

  return (
    <section className="max-w-4xl mx-auto p-6 pt-[120px]">
      {/* 상세페이지 우측  */}
      <div className="flex gap-8 flex-col md:flex-row">
        {/* 향수 이미지 */}
        <div className="w-full md:w-1/2">
          <Image
            src={img}
            alt={title}
            width={500}
            height={500}
            className="rounded-xl shadow"
          />
        </div>

        {/* 상세 정보 */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold">{brand}</h2>
          <p className="text-xl text-gray-600">{title}</p>

          {/* 가격 */}
          {sale ? (
            <div className="text-red-500 text-xl font-bold">
              {sale}%{" "}
              <span className="line-through text-gray-400 mr-2">{price}</span>
              {discountedPrice.toLocaleString()}원
            </div>
          ) : (
            <div className="text-xl font-bold">{price}</div>
          )}

          {/* 리뷰 */}
          {review?.[0] && (
            <div className="text-yellow-500 text-sm mb-[40px]">
              ★ {review[0].reviewStar} / 리뷰 {review[0].reviews}개
            </div>
          )}

          {/* 상세설명 */}
          <ol className="flex flex-col gap-[30px] mb-[40px]">
            <li>
              <h2>[부향률]</h2>
              <p className="text-gray-500 text14">- {concentration}</p>
            </li>
            <li>
              <h2>[메인 어코드]</h2>
              <p className="text-gray-500 text14">- {mainAccords}</p>
            </li>
            <li>
              <h2>[메인 노트]</h2>
              <p className="text-gray-500 text14">- {mainNotes.topNotes}</p>
              <p className="text-gray-500 text14">- {mainNotes.middleNotes}</p>
              <p className="text-gray-500 text14">- {mainNotes.baseNotes}</p>
            </li>
            <li>
              <h2>[향 설명]</h2>
              <p className="text-gray-500 text14">- {scentDescription}</p>
            </li>
          </ol>

          {/* 배송관련  */}
          <div className="flex items-center gap-[16px] mb-[20px]">
            <div>
              <DetailDelivery width="56" />
            </div>
            <div className="text14 flex flex-col gap-[6px]">
              <p>✈️ 해외배송비 10,000원</p>
              <p>🚚 예상배송일 3-5일</p>
            </div>
          </div>

          {/* 보상 및 보증 */}
          <div>
            <div className="flex items-center mb-[20px]">
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src={fiveImage.src}
                  alt="환불"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <p className="textBold12">100% 정품 보증</p>
                <p className="text12 text-gray-600">
                  " "에서 검수한 상품이 정품이 아닐 경우, 구매가의 5배를
                  보상해요.
                </p>
              </div>
            </div>
            <div className="flex items-center mb-[20px]">
              <div className="w-[50px] h-[50px] relative">
                <Image
                  src={detailImage.src}
                  alt="환불"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p className="textBold12">엄격한 다중 검수</p>
                <p className="text12 text-gray-600">
                  모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 검수를
                  마칩니다.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
            장바구니에 담기
          </button>
        </div>
      </div>

      {/* 설명 추가 영역 */}
      <div className="mt-16 mb-8">
        <h3 className="text-xl font-semibold mb-4">제품 설명</h3>
        <p className="text-gray-600">
          이 향수는 {brand}의 인기 라인 중 하나로, {title}이라는 이름처럼 특별한
          향을 선사합니다. 당신의 주말을 더 빛나게 해줄 완벽한 선택이 될 거예요.
        </p>
      </div>
      <h3 className="text-xl font-semibold mb-4">상품 법적고시</h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 text-sm">
          <tbody>
            {/* 1. 제조국 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                제조국
              </th>
              <td className="p-3 align-top">
                미국 <br />
                <span className="text-gray-600 text-xs">
                  * 제조국 정보는 최초 생산지 기준이며, 추가 생산이 이루어질
                  경우 제조국이 달라질 수 있습니다.
                </span>
              </td>
            </tr>

            {/* 2. 사용방법 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                사용방법
              </th>
              <td className="p-3 align-top">
                원하는 부위의 깨끗한 피부에 향수를 1~2번 분무하세요. 향수를
                피부에 문지르지 마세요. 향이 깨질 수 있습니다.
                <br />
                <strong>프로의 팁:</strong> 어떤 무드에든 쓸 수 있는 개인
                컬렉션을 만들어보세요.
              </td>
            </tr>

            {/* 3. 표시성분 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                표시성분
              </th>
              <td className="p-3 align-top">
                변성알코올 , 정제수, 향료, 리모넨, 니랄룰, 하이드록시시트로넬알,
                제라니올, 시트로넬올, 시트랄, 파네솔 [ILN39912]
                <br />
                <span className="text-gray-600 text-xs">
                  * 제공된 성분은 동일 제품이라도 경우에 따라 변경될 수
                  있습니다.
                </span>
              </td>
            </tr>

            {/* 4. 심사필유무 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                심사필유무
              </th>
              <td className="p-3 align-top">해당없음</td>
            </tr>

            {/* 5. 상품주요사양 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                상품주요사양
              </th>
              <td className="p-3 align-top">모든 피부용</td>
            </tr>

            {/* 6. 용량 또는 중량 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                용량 또는 중량
              </th>
              <td className="p-3 align-top">30ml / 50ml / 100ml</td>
            </tr>

            {/* 7. 품질보증기준 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                품질보증기준
              </th>
              <td className="p-3 align-top">
                공정거래위원회 고시 ‘품목 별 소비자 분쟁 해결 기준’에 따름
              </td>
            </tr>

            {/* 8. 사용할 때 주의사항 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                사용할 때 주의사항
              </th>
              <td className="p-3 align-top leading-relaxed">
                1. 화장품 사용 중 아래와 같은 이상이 있을 경우 즉시 사용을
                중단하고 전문가 상담:
                <br />
                &nbsp;&nbsp;1) 사용 중 붉은 반점, 부어오름, 가려움증, 자극 등의
                이상이 있을 경우
                <br />
                &nbsp;&nbsp;2) 적용 부위가 직사광선에 의해 같은 이상이 있을 경우
                <br />
                2. 상처, 습진 및 피부염 등의 이상이 있는 부위에는 사용금지
                <br />
                3. 눈에 들어가지 않도록 주의
                <br />
                4. 보관 및 취급 주의:
                <br />
                &nbsp;&nbsp;1) 사용 후 반드시 마개를 닫을 것
                <br />
                &nbsp;&nbsp;2) 유·소아의 손에 닿지 않는 곳에 보관
                <br />
                &nbsp;&nbsp;3) 고온·저온·직사광선을 피할 것
              </td>
            </tr>

            {/* 9. 소비자상담관련 전화번호 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                소비자상담관련 전화번호
              </th>
              <td className="p-3 align-top">1000-0000</td>
            </tr>

            {/* 10. 사용기한 또는 개봉 후 사용기간 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                사용기한 또는 개봉후사용기간
              </th>
              <td className="p-3 align-top">
                - 개봉 전 사용기한이 12개월 이상 남아있는 제품으로 발송 <br />-
                사용기한 12개월 미만 제품의 경우 제조일자 별도 표기
              </td>
            </tr>

            {/* 11. 화장품제조업자 및 화장품책임판매업자 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                화장품제조업자 및 화장품책임판매업자
              </th>
              <td className="p-3 align-top">""</td>
            </tr>

            {/* 12. 배송안내 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                배송안내
              </th>
              <td className="p-3 align-top leading-relaxed">
                • 본 상품은 해외배송만 가능합니다. <br />
                • 주문완료 후 현지 재고 상황에 따라 품절로 인한 주문취소가
                발생할 수 있습니다. <br />• 특정 상품 외에는 브랜드 쇼핑백이나
                포장이 제공되지 않습니다. <br />• 공급처에 따라 패키지 및 제품
                실링 등 포장 상태가 상이할 수 있습니다.
              </td>
            </tr>

            {/* 13. 교환 및 반품 안내 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                교환 및 반품 안내
              </th>
              <td className="p-3 align-top leading-relaxed">
                • 상품 발송 전(입금대기/결제완료) 상태일 경우에만 주문취소 가능{" "}
                <br />
                • 해외상품 특성상 단순변심에 의한 반품 시 해외 왕복 배송비 3만원
                발생 <br />
                • 단순히 향이 다르거나, 가품 의심 등 주관적인 의견은 단순변심에
                해당 <br />
                • 판매자 귀책 사유로 인한 반품은 고객센터 문의 <br />•
                네이버페이로 주문한 경우 반품은 고객센터 문의
              </td>
            </tr>

            {/* 14. 개인통관고유부호 안내 */}
            <tr className="border-b border-gray-300">
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                개인통관고유부호 안내
              </th>
              <td className="p-3 align-top leading-relaxed">
                • 해외배송 상품 통관 시 주민등록번호 대신 사용 가능한 번호로,
                관세청 사이트에서 발급/조회 가능 <br />
                • 개인통관고유부호 오류, 관세미납, 자가사용사유서 미제출 등 고객
                사유로 통관 지연 또는 물품 멸실 발생 시, 고객이 비용(제품 가격
                및 배송비 등) 부담 <br />
                • 통관 안내를 위해 바이슈코에서 연락할 수 있으며, 15일 이내
                통관이 완료되지 않을 경우 [배송완료] 처리 <br />
                • 발급정보(성명, 전화번호, 주소)가 변경된 경우 관세청
                개인통관고유부호 발급 사이트에서 수정 <br />• 개인통관고유부호 +
                성명 + 전화번호가 불일치 시 통관 제한될 수 있음
              </td>
            </tr>

            {/* 15. 관세 및 합산과세 안내 */}
            <tr>
              <th className="p-3 font-semibold bg-gray-100 w-48 align-top text-left">
                관세 및 합산과세 안내
              </th>
              <td className="p-3 align-top leading-relaxed">
                • 상품단가 $150 초과, 향수 60ml 초과 시 관부가세 발생 <br />
                • 여러 개 뷰티 상품을 한 번에 구매 시 관부가세가 발생하는 경우
                배송비와 비교하여 상품을 나누어 발송할 수 있음 <br />
                • 동일 날짜에 여러 번 주문 시 자동으로 나누어 발송 <br />• 동일
                날짜에 타사 해외직구 상품 주문 시 합산과세가 부과될 수 있음
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
