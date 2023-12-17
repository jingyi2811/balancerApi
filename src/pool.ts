import {BalancerSDK, BalancerSdkConfig, Network, PoolWithMethods} from '@balancer-labs/sdk';

const config: BalancerSdkConfig = {
    network: Network.MAINNET,
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA}`,
};
const balancer = new BalancerSDK(config);

const pools: PoolWithMethods[] = await balancer.pools.all();
const stablePoolIds = pools
    .filter(pool => pool.poolType === 'Stable')
    .map(stablePool => stablePool.id);

console.log(stablePoolIds)