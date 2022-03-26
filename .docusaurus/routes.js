
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','36f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','d40'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','61d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','e02'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','277'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','cfa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','a5d'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','091'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','b36'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','894'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','73c'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','65c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','45f'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','519'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','eaf'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','76a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','ffd'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','a5a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','007'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','ce8'),
    routes: [
      {
        path: '/docs/1、系统安装/联想Y7000安装windows10 过程',
        component: ComponentCreator('/docs/1、系统安装/联想Y7000安装windows10 过程','7e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1、系统安装/在windows中安装windows7系统',
        component: ComponentCreator('/docs/1、系统安装/在windows中安装windows7系统','dc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1、系统安装/PE维护U盘的制作',
        component: ComponentCreator('/docs/1、系统安装/PE维护U盘的制作','ae2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1、系统安装/VMware 虚拟机安装windows7',
        component: ComponentCreator('/docs/1、系统安装/VMware 虚拟机安装windows7','ef3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1、系统安装/VMware16 下载与安装',
        component: ComponentCreator('/docs/1、系统安装/VMware16 下载与安装','dd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/1、系统安装/windows10系统U盘制作方法',
        component: ComponentCreator('/docs/1、系统安装/windows10系统U盘制作方法','f14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/100好用软件推荐/好用截图软件',
        component: ComponentCreator('/docs/100好用软件推荐/好用截图软件','f19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/100好用软件推荐/Adobe_Photoshop',
        component: ComponentCreator('/docs/100好用软件推荐/Adobe_Photoshop','43d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/100好用软件推荐/Everything 硬盘文件查找',
        component: ComponentCreator('/docs/100好用软件推荐/Everything 硬盘文件查找','7ad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/电脑使用常识/微信存储文件路径更改',
        component: ComponentCreator('/docs/电脑使用常识/微信存储文件路径更改','4db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/电脑使用常识/硬盘分区',
        component: ComponentCreator('/docs/电脑使用常识/硬盘分区','903'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/电脑使用常识/google chrome 浏览器下载',
        component: ComponentCreator('/docs/电脑使用常识/google chrome 浏览器下载','3a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/硬盘常见故障/固态硬盘开卡维修教程',
        component: ComponentCreator('/docs/硬盘常见故障/固态硬盘开卡维修教程','bf1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/硬盘常见故障/硬盘开盘数据恢复',
        component: ComponentCreator('/docs/硬盘常见故障/硬盘开盘数据恢复','4ce'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/硬盘常见故障/C盘空间爆满的处理及原因分析',
        component: ComponentCreator('/docs/硬盘常见故障/C盘空间爆满的处理及原因分析','689'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/硬盘常见故障/hdd',
        component: ComponentCreator('/docs/硬盘常见故障/hdd','26b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/硬盘常见故障/SM2258XT 全套工厂固件下载',
        component: ComponentCreator('/docs/硬盘常见故障/SM2258XT 全套工厂固件下载','26f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/windows10/联想Y7000安装windows10 过程',
        component: ComponentCreator('/docs/windows10/联想Y7000安装windows10 过程','6fe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/windwos2022',
        component: ComponentCreator('/docs/windwos2022','1a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','f0f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
