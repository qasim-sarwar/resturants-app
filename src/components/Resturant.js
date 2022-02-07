import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Shop from "./Shop.js";

const resturants = [
  { no:"1", id: "J001219214", name: "鍋 サムギョプサル専門店 なっさむ",address: "東京都豊島区東池袋１-27-5 関口ビル1F", logo_image: "https://imgfp.hotp.jp/IMGH/03/58/P038320358/P038320358_69.jpg", genre: "【大還元祭対象店】1250pt/人で最大5000pt",budget: "3001～4000円"},
  { no:"2", id: "J001249519", name: "NOMO-ZE 新宿東口店",address: "東京都新宿区歌舞伎町１-23-12桑原ビル3F", logo_image: "https://imgfp.hotp.jp/IMGH/89/46/P038758946/P038758946_69.jpg", genre: "新宿駅徒歩3分！★食べ飲み放題2500円～★",budget: "2001～3000円"},
  { no:"3", id: "J001283763", name: "ロードハウス 2号店",address: "東京都新宿区西新宿１－４－１９ミルトスビル１Ｆ＆２Ｆ", logo_image: "https://imgfp.hotp.jp/IMGH/73/87/P034927387/P034927387_69.jpg", genre: "GUINＮESS BEST PUB認定ビールの名店♪",budget: "3001～4000円" },
  { no:"4", id: "J001283964", name: "BUZZ STAND 新宿東口店",address: "東京都新宿区歌舞伎町１-１７の２小松ビル4階", logo_image: "https://imgfp.hotp.jp/IMGH/99/21/P038749921/P038749921_69.jpg", genre: "新宿東口の個室カラオケ・ダーツバー",budget: "3001～4000円"},
  { no:"5", id: "J001038751", name: "創作ダイニング Fusa 新橋",address: "東京都港区新橋４－１９－１０ タカソビルB1", logo_image: "https://imgfp.hotp.jp/IMGH/55/08/P018245508/P018245508_69.jpg", genre: "新橋で小人数で貸し切りが出来るお店",budget: "3001～4000円"},
  { no:"6", id: "J001285817", name: "御州屋 GOSHUYA 八王子本店",address: "東京都八王子市旭町6-9 7F-B", logo_image: "https://imgfp.hotp.jp/IMGH/01/24/P035930124/P035930124_69.jpg", genre: "ゆったり個室席で薩摩地鶏と旬の味を堪能♪",budget: "2001～3000円"},
  { no:"7", id: "J001161190", name: "肉バル GABURICO ガブリコ 銀座並木通り店",address: "東京都中央区銀座３-3-14 グランディアビル2 4F", logo_image: "https://imgfp.hotp.jp/IMGH/34/30/P024873430/P024873430_69.jpg", genre: "銀座No.1★肉女子会で人気の個室肉バル！",budget: "2001～3000円"},
  { no:"8", id: "J001026618", name: "CARNAVAL カルナバル",address: "東京都中央区銀座７－２－２０ パシフィック銀座ビル2階", logo_image: "https://imgfp.hotp.jp/IMGH/63/68/P023526368/P023526368_69.jpg", genre: "上質プライベート空間 肉×イタリアン<",budget: "3001～4000円"},
  { no:"9", id: "J001128870", name: "よりどり YORIDORI 新宿東口店",address: "東京都新宿区新宿3-25-9新宿モアビル5F", logo_image: "https://imgfp.hotp.jp/IMGH/41/20/P035314120/P035314120_69.jpg", genre: "新宿で美味しい厳選肉をリーズナブルに堪能",budget: "3001～4000円"},
  { no:"10", id: "J000981534", name: "温野菜 中目黒店",address: "東京都目黒区上目黒２－１２－１１", logo_image: "https://imgfp.hotp.jp/IMGH/27/24/P010852724/P010852724_69.jpg", genre: "しゃぶしゃぶ 食べ放題 飲み放題",budget: "3001～4000円" }
];

class Resturant extends Component {
  render() {
    return (
      <section className="page-section" style={{ background: "#303030" }} id="resturant">
        <div className="container">
          {/* reading properties */}
          <Row xs={1} md={2} className="g-4">
            {resturants.map((resturant, index) => {
              return <Shop {...resturant} key={index} />;
            })}
          </Row>
        </div>
      </section>
    );
  }
}

export default Resturant;
