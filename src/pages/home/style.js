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

export const WriteWrapper = styled.div`
  width:278px;
  height:300px;

`
export const WriterTitleWrapper = styled.div`
  margin-top:10px;
  margin-bottom: 5px;
  line-height: 20px;
  height:20px;
  span{
    color:#969696;
    font-size:14px;
  }
  .title-left{
    float:left;
  }
  .title-right{
    float:right;
  }
`
export const WriterItem = styled.div`
  margin-top:10px;
  overflow: hidden;
  height:50px;
  margin-bottom:15px;
  .nameWrapper{
    height:30px;
  }
  .avatar{
    float:left;
    width: 48px;
    height: 48px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-right:10px;
  }
  .name{
    padding-top: 5px;
    font-size: 14px;
    display:block;
    float:left;
  }
  .follow{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
  p{
    font-size:12px;
    color: #969696;
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height:40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color:#fff;
  margin:30px 0;
  cursor: pointer;
`
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom:100px;
  width: 60px;
  height: 60px;
  line-height:60px;
  text-align:center;
  border:1px solid #ccc;
  font-size:14px;
`