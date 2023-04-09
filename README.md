# template-abc

## 安装

```bash
# 安装全局工具
npm i -g template-abc 
```

## 使用
```bash
template-abc <template> <project>  [-f|--force]

#使用内定模板  
#火电    template=fire
#分公司  template=group
template-abc <template> <project>

#使用 Gitlab 仓库其他模板（自定义模板）
template-abc <Group>/<Repo> <project>

#如果不想全局安装
npx template-abc <template> <project>  [-f|--force]
```

## 参数

- [-f|--force], 强制覆盖当前文件夹（慎用）


## 完整流程例子-新增西藏火电
```bash
npm i -g template-abc 
#到当前 ./adss-frontend-monolith 目录下终端运行
template-abc  fire ./packages/xz-fire
#然后一路回车默认，或者手动选择具体配置
#finish
```

## 查看内定模板
```bash
template-abc list
```

## 自定义模板

- 请参照[官方火电模板](http://git.tsintergy.com:8070/frontend/adss-template-fire/)的README文档

## TODO

- 模板下载兼容github
- 模板文件内容选择性下载，譬如可选择部分业务代码页面

