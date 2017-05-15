### A theme for [Hexo].

```
.
├── languages                            || 语言配置文件       
│   ├── default.yml                      || 默认国际英语
│   └── zh-CN.yml                        || 设定为中文
├── layout                               || 布局文件
│   ├── _partial                        
│   │   ├── head.ejs                     || 首页head布局
│   │   ├── header.ejs                   || 首页导航栏布局
│   │   └── paginator.ejs                || 分页
│   ├── archive.ejs                      || 文章归档页
│   ├── index.ejs                        || 首页使用该布局生成HTML文件
│   ├── layout.ejs                       || 共用的布局文件
│   └── post.ejs                         || 文章详情页对应的布局文件
├── scripts                              || js文件
├── source                      
│   └── css                              || 样式
│       ├── _partial 
│       │   ├── archive.styl             || 文章归档页样式
│       │   ├── header.styl              || 导航栏样式
│       │   └── post.styl                || 文章详情页样式
│       └── style.styl                   || 被编译文件，import所有样式文件
└── _config.yml                          || 配置文件

```