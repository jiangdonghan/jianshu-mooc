// import * as constants from './constants'
import { fromJS} from 'immutable'

//数据都存在reducer里
const defaultState = fromJS({
  topicList:[{
    id: 1,
    title: '社会热点',
    src: 'https://via.placeholder.com/32'
  },
  {
    id: 2,
    title: '教育',
    src: 'https://via.placeholder.com/32'
  },

  {
    id: 3,
    title: 'vue',
    src: 'https://via.placeholder.com/32'
  },

  {
    id: 4,
    title: 'react',
    src: 'https://via.placeholder.com/32'
  },

  {
    id: 5,
    title: '小程序',
    src: 'https://via.placeholder.com/32'
  }],
  articleList: [{
    id:1,
    title:'嫁给初恋，就真的幸福了吗？',
    detail:'3月19日，萧亚轩的新专辑《不如先庆祝能在一起》就要上线了，我第一反应是：嚯～这专辑和Elva的恋爱宗旨一样，幸福了就在一起，不爱了就利落分...',
    url:'http://upload-images.jianshu.io/upload_images/17180993-eb6c338fef2c8815?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id:2,
    title:'嫁给初恋，就真的幸福了吗？',
    detail:'3月19日，萧亚轩的新专辑《不如先庆祝能在一起》就要上线了，我第一反应是：嚯～这专辑和Elva的恋爱宗旨一样，幸福了就在一起，不爱了就利落分...',
    url:'http://upload-images.jianshu.io/upload_images/17180993-eb6c338fef2c8815?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id:3,
    title:'嫁给初恋，就真的幸福了吗？',
    detail:'3月19日，萧亚轩的新专辑《不如先庆祝能在一起》就要上线了，我第一反应是：嚯～这专辑和Elva的恋爱宗旨一样，幸福了就在一起，不爱了就利落分...',
    url:'http://upload-images.jianshu.io/upload_images/17180993-eb6c338fef2c8815?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id:4,
    title:'嫁给初恋，就真的幸福了吗？',
    detail:'3月19日，萧亚轩的新专辑《不如先庆祝能在一起》就要上线了，我第一反应是：嚯～这专辑和Elva的恋爱宗旨一样，幸福了就在一起，不爱了就利落分...',
    url:'http://upload-images.jianshu.io/upload_images/17180993-eb6c338fef2c8815?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
  
});

export default (state = defaultState,action) => {
  switch(action.type){
    default: return state
  }
}
