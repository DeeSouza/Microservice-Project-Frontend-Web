import { GetServerSideProps } from "next";
import { gql, useQuery } from "@apollo/client";
import {
  getAccessToken,
  useUser,
  withPageAuthRequired,
} from "@auth0/nextjs-auth0";
import { withApollo } from "../../lib/withApollo";
import {
  useGetProductsQuery,
  useMeQuery,
} from "../../graphql/generated/graphql";
import {
  getServerPageGetProducts,
  ssrGetProducts,
} from "../../graphql/generated/page";

export function Home() {
  const { data: me } = useMeQuery();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>OK: {JSON.stringify(me, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // return getServerPageGetProducts({}, ctx);

    return {
      props: {},
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
