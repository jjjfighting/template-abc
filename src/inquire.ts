import { Context } from "./types";
import prompts from "prompts";

export default async (ctx: Context): Promise<void> => {
  if (ctx.config.prompts === null) {
    ctx.config.prompts = [
      { name: "name", type: "text", message: "Project name" },
    ];
  }

  ctx.config.prompts?.forEach((item) => {
    if (item.name === 'name') {
      const temp = ctx.projectName.split('/');
      item.initial = temp[temp.length - 1];
    }
  });

  Object.assign(
    ctx.answers,
    await prompts(ctx.config.prompts, {
      oncancel: () => {
        throw new Error("Prompt tasks has canceled");
      },
    })
  );
};
