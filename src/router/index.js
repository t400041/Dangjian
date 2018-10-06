import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Service from '@/components/service/service'
import Chat from '@/components/chat/chat'
import Learn from '@/components/learn/learn'
import Manage from '@/components/manage/manage'
import InfoCenter from '@/components/home/info-center'
import Questionnaire from '@/components/home/questionnaire'
import QuestionnaireDetail from '@/components/home/questionnaire-detail'
import Usercenter from '@/components/home/usercenter'
import Suggest from '@/components/home/suggest'
import SuggestAdd from '@/components/home/suggest-add'
import ScoreDetail from '@/components/home/score-detail'
import SHYK from '@/components/home/shyk'
import MyMeeting from '@/components/home/my-meeting'
import MeetingDetail from '@/components/home/meeting-detail'
import Checkin from '@/components/home/checkin'
import Trends from '@/components/home/trends'
import NewsDetail from '@/components/home/news-detail'
import ManageMember from '@/components/manage/manage-member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/Learn',
      name: 'Learn',
      component: Learn
    },
    {
      path: '/Manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/ManageMember',
      name: 'ManageMember',
      component: ManageMember
    },
    {
      path: '/Usercenter',
      name: 'Usercenter',
      component: Usercenter
    },
    {
      path: '/Questionnaire',
      name: 'Questionnaire',
      component: Questionnaire
    },
    {
      path: '/QuestionnaireDetail',
      name: 'QuestionnaireDetail',
      component: QuestionnaireDetail
    },
    {
      path: '/Suggest',
      name: 'Suggest',
      component: Suggest
    },
    {
      path: '/SuggestAdd',
      name: 'SuggestAdd',
      component: SuggestAdd
    },
    {
      path: '/ScoreDetail',
      name: 'ScoreDetail',
      component: ScoreDetail
    },
    {
      path: '/SHYK',
      name: 'SHYK',
      component: SHYK
    },
    {
      path: '/MyMeeting',
      name: 'MyMeeting',
      component: MyMeeting
    },
    {
      path: '/MeetingDetail',
      name: 'MeetingDetail',
      component: MeetingDetail
    },
    {
      path: '/Checkin',
      name: 'Checkin',
      component: Checkin
    },
    {
      path: '/Trends',
      name: 'Trends',
      component: Trends
    },
    {
      path: '/NewsDetail',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/InfoCenter',
      name: 'InfoCenter',
      component: InfoCenter
    }

  ]
})
