
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','a87'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','d62'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','d09'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','192'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','7b7'),
    routes: [
      {
        path: '/docs/1、系统安装/联想Y7000安装windows10 过程',
        component: ComponentCreator('/docs/1、系统安装/联想Y7000安装windows10 过程','7e7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1、系统安装/在windows中安装windows7系统',
        component: ComponentCreator('/docs/1、系统安装/在windows中安装windows7系统','dc6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1、系统安装/PE维护U盘的制作',
        component: ComponentCreator('/docs/1、系统安装/PE维护U盘的制作','ae2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1、系统安装/VMware 虚拟机安装windows7',
        component: ComponentCreator('/docs/1、系统安装/VMware 虚拟机安装windows7','ef3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1、系统安装/VMware16 下载与安装',
        component: ComponentCreator('/docs/1、系统安装/VMware16 下载与安装','dd6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1、系统安装/windows10系统U盘制作方法',
        component: ComponentCreator('/docs/1、系统安装/windows10系统U盘制作方法','f14'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/电脑使用常识/微信存储文件路径更改',
        component: ComponentCreator('/docs/电脑使用常识/微信存储文件路径更改','4db'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/电脑使用常识/硬盘分区',
        component: ComponentCreator('/docs/电脑使用常识/硬盘分区','903'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/电脑使用常识/google chrome 浏览器下载',
        component: ComponentCreator('/docs/电脑使用常识/google chrome 浏览器下载','3a6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/硬盘常见故障/固态硬盘开卡维修教程',
        component: ComponentCreator('/docs/硬盘常见故障/固态硬盘开卡维修教程','bf1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/硬盘常见故障/硬盘开盘数据恢复',
        component: ComponentCreator('/docs/硬盘常见故障/硬盘开盘数据恢复','4ce'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/硬盘常见故障/C盘空间爆满的处理及原因分析',
        component: ComponentCreator('/docs/硬盘常见故障/C盘空间爆满的处理及原因分析','689'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/硬盘常见故障/hdd',
        component: ComponentCreator('/docs/硬盘常见故障/hdd','26b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/硬盘常见故障/SM2258XT 全套工厂固件下载',
        component: ComponentCreator('/docs/硬盘常见故障/SM2258XT 全套工厂固件下载','26f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/windows10/联想Y7000安装windows10 过程',
        component: ComponentCreator('/docs/windows10/联想Y7000安装windows10 过程','6fe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/windwos2022',
        component: ComponentCreator('/docs/windwos2022','1a4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
