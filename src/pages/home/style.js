import styled from 'styled-components'
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow:hidden;
`
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 35px;
  float:left;
  .banner-img{
    width:625px;
    height:270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float:right;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding:20px 0 10px 0 ;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float:left;
  background:#f7f7f7;
  padding-right:10px;
  margin-left:18px;
  margin-bottom: 18px;
  height: 32px;
  color: #000;
  line-height: 32px;
  font-size: 14px;
  border:1px solid #dcdcdc;
  border-radius:4px;
  img{
    display:block;
    float:left;
    margin-right:10px;
  }
`
export const ListItem = styled.div`
  overflow:hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    width: 125px;
    height: 100px;
    display:block;
    float:right;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`
export const ListInfo = styled.div`
  width:480px;
  float:left;
  .title{
    line-height: 27px;
    font-size:18px;
    font-weight: bold;
    color: #969696;
    margin: 7px -7px 0 4px;
  }
  .detail{
    line-height: 24px;
    font-size: 24px;
    font-size: 13px;
    color:#999999;
    margin: 0 0 8px;
  }
`
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width:280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height:50px;
  margin-bottom: 5px;
  background: url('${(props)=>props.imgUrl}');
  background-size: contain;
`