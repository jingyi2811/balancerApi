import {BalancerSDK, BalancerSdkConfig, Network, PoolWithMethods} from '@balancer-labs/sdk';
import Web3 from 'web3';

const config: BalancerSdkConfig = {
    network: Network.MAINNET,
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA}`,
};
const balancer = new BalancerSDK(config);

const pools: PoolWithMethods[] = await balancer.pools.all();

// const stablePoolIds = pools
//     .filter(pool => pool.poolType === 'Stable')
//     .map(stablePool => stablePool.id);

const result = pools
    .filter(pool => pool.poolType === 'Stable')
   .map(stablePool => stablePool.address);

for (let i = 0; i < result.length; i++) {
    console.log(Web3.utils.toChecksumAddress(result[i]));
}
