<?php

namespace App\Services;


final class LatencyService
{
    public static function ms(int $startNs, int $endNs): float
    {
        if ($endNs < $startNs) {
            return 0.0;
        }

        return round(($endNs - $startNs) / 1_000_000, 2);
    }
}
