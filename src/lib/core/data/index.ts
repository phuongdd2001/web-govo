import { goto } from "$app/navigation";

export interface ItemMenu {
  title: string;
  link: string;
}

export interface ItemOutstanding {
  title: string;
  total: number;
  unit: string;
  image: string;
}

export interface ItemProduct {
  title: string;
  total: string;
  image: string;
  thumbnail: string;
  link: string;
}

export interface Partner {
  title: string;
  image: string;
}

export interface User {
  name: string;
  role: string;
  image: string;
}

export interface PrivacyPolicy {
  id: number;
  attributes: {
    Content: string;
  };
}

export interface TermOfUse {
  id: number;
  attributes: {
    Des: string;
  };
}

export class CMSResponse<T> {
  data?: T;
  error?: Error;
  meta?: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const srcollToId = (id: string, pathname: string) => {
  if (pathname === "/") {
    const element = document.querySelector(`#${id}`);
    if (!element) return;
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  } else {
    goto(`/`);
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 100);
  }
};
